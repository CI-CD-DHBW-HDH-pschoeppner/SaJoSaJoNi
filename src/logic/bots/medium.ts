import type { Field } from "../game";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  return -1 // TODO: implement
}

// this bot:
// - blocks the player from winning, if it can
// - chooses a random move otherwise
export function pettyMove(board: Field[], own: Field): number {
  return -1 // TODO: implement
}
