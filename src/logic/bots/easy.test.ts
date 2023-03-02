import { easyMove } from "./easy";
import { Field } from "../game";

describe("test easyMove-Function", () => {
  //replace the math.floor method
  let randomMoveSpy: jest.SpyInstance<number, [x: number], any>;

  beforeEach(() => {
    randomMoveSpy = jest.spyOn(Math, "floor");
  });

  afterEach(() => {
    randomMoveSpy.mockRestore();
  });

  it("should return a number between 0 and 8", () => {
    const board = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];

    const own = Field.PLAYER1;

    randomMoveSpy.mockReturnValueOnce(8);
    const got = easyMove(board, own);

    expect(got).toEqual(8);
    expect(randomMoveSpy).toHaveBeenCalled();
  });

  it("check if player2 gets the winningMove Position back", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];

    const own = Field.PLAYER2;

    const got = easyMove(board, own);
    expect(got).toBe(7);
  });
  it("check if player1 gets the winningMove Position back", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
    ];

    const own = Field.PLAYER1;

    const got = easyMove(board, own);
    expect(got).toBe(2);
  });
});
