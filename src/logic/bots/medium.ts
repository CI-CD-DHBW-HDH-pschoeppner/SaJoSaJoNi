import { getBlanks, Field, won, invertPlayer } from "../game";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  const blanks = getBlanks(board);

  let goalField = -1;

  // chooses the winning move, if it can win
  for (const move of blanks) {
    const copyBoard = [...board];
    copyBoard[move] = own;
    if (won(copyBoard) === own) {
      goalField = move;
      break;
    }
  }

  if (goalField === -1) {
    // blocks the player from winning, if it can
    for (const move of blanks) {
      const copyBoard = [...board];
      copyBoard[move] = invertPlayer(own);
      if (won(copyBoard) === invertPlayer(own)) {
        goalField = move;
        break;
      }
    }
  }

  if (goalField === -1) {
    // chooses the middle (4) field, if it can
    if (board[4] === Field.EMPTY) {
      goalField = 4;
    }
  }

  if (goalField === -1) {
    // chooses a random move otherwise
    goalField = blanks[Math.floor(Math.random() * blanks.length)];
  }

  return goalField; // TODO: implement
}

export function pettyMove(board: Field[], own: Field): number {

  const blanks = getBlanks(board);

  //brute force check if enemy could win with a move
  for (const field of blanks) {
    const simulatedBoard = [...board];
    simulatedBoard[field] = invertPlayer(own);

    //check if enemy would win with this move
    if (won(simulatedBoard) === invertPlayer(own)) {
      return field;
    }
  }

  //if no enemy win move is possible, choose a random move
  return blanks[Math.floor(Math.random() * blanks.length)];
}
