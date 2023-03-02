import { Field, getBlanks } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot:
// - chooses the winning move, if it can win
// - chooses a random move otherwise
export function easyMove(board: Field[], own: Field): number {
  // check for a winning move
  let fieldNo = winningMove(board, own);

  if (fieldNo == -1 && getBlanks(board).length > 0) {
    // no winning move possible - choose a random move
    let empty = false;
    while (!empty) {
      // choose random field number
      fieldNo = randomMove(9);
      // check if field is empty
      if (board[fieldNo] == Field.EMPTY) {
        empty = true;
      }
    }
  }
  return fieldNo;
}