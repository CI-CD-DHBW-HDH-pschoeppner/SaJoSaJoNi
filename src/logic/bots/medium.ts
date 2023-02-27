import { getBlanks, Field, won } from "../game";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  const blanks = getBlanks(board);

  var goalField = -1;

  // chooses the winning move, if it can win
  for(const move of blanks) {
    board[move] = own;
    if(won(board) === own) {
      goalField = move;
      break;
    }
    board[move] = Field.EMPTY;
  }

  if (goalField === -1) {
    // blocks the player from winning, if it can
    // horizontal
    for (let i = 0; i < 9; i = i + 3) {
      if (board[i] === 1 && board[i + 1] === 1 && board[i + 2] === 0) {
        goalField = i + 2;
      }
      if (board[i] === 0 && board[i + 1] === 1 && board[i + 2] === 1) {
        goalField = i;
      }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
      if (board[i] === 1 && board[i + 3] === 1 && board[i + 6] === 0) {
        goalField = i + 6;
      }
      if (board[i] === 0 && board[i + 3] === 1 && board[i + 6] === 1) {
        goalField = i;
      }
    }

    // diagonal
    if (board[0] === 1 && board[4] === 1 && board[8] === 0) {
      goalField = 8;
    }
    if (board[0] === 0 && board[4] === 1 && board[8] === 1) {
      goalField = 0;
    }
    if (board[2] === 1 && board[4] === 1 && board[6] === 0) {
      goalField = 6;
    }
    if (board[2] === 0 && board[4] === 1 && board[6] === 1) {
      goalField = 2;
    }
  }

  if(goalField === -1) {
    // chooses the middle (4) field, if it can
    if(board[4] === Field.EMPTY) {
      goalField = 4;
    }
  }

  if(goalField === -1) {
    // chooses a random move otherwise
    goalField = blanks[Math.floor(Math.random() * blanks.length)];
  }

  console.log(goalField)
  return goalField; // TODO: implement
}

// this bot:
// - blocks the player from winning, if it can
// - chooses a random move otherwise
export function pettyMove(board: Field[], own: Field): number {
  return -1 // TODO: implement
}
