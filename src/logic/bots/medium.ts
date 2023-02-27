import { getBlanks, invertPlayer, won, type Field } from "../game";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  return -1 // TODO: implement
}

export function pettyMove(board: Field[], own: Field): number {

  const blanks = getBlanks(board);

  //brute force check if enemy could win with a move
  for (var field of blanks) {
    var simulatedBoard = [...board];
    simulatedBoard[field] = invertPlayer(own);

    //check if enemy would win with this move
    if (won(simulatedBoard) === invertPlayer(own)) {
      return field;
    }
  }

  //if no enemy win move is possible, choose a random move
  return blanks[Math.floor(Math.random() * blanks.length)];
}
