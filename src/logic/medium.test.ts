import { mediumMove, pettyMove } from "./bots/medium";
import { Field } from "./game";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.7);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

describe("medium move", () => {
  it("choose winning move horizontal", () => {
    const board: Field[] = [0, 1, 1, 0, 0, 0, 2, 2, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(0);
  });
  it("choose winning move vertical", () => {
    const board: Field[] = [1, 0, 0, 1, 0, 0, 0, 2, 2];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(6);
  });
  it("choose winning move diagonal", () => {
    const board: Field[] = [1, 0, 0, 0, 1, 0, 0, 2, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(8);
  });

  it("block winning move horizontal", () => {
    const board: Field[] = [1, 0, 0, 2, 2, 0, 0, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(5);
  });
  it("block winning move vertical", () => {
    const board: Field[] = [0, 0, 0, 2, 0, 0, 2, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(0);
  });
  it("block winning move diagonal", () => {
    const board: Field[] = [0, 0, 2, 0, 2, 0, 0, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(6);
  });

  it("choose middle if possible", () => {
    const board: Field[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(4);
  });

  it("choose random move", () => {
    const board: Field[] = [0, 0, 0, 0, 2, 0, 0, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
    expect(result).not.toBe(4);
  });

  it("choose random move", () => {
    const board: Field[] = [0, 0, 0, 0, 2, 0, 0, 0, 0];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(6);
  });
});

describe("petty move", () => {
  it("block winning move horizontal", () => {
    const board: Field[] = [1, 0, 0, 2, 2, 0, 0, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBe(5);
  });
  it("block winning move vertical", () => {
    const board: Field[] = [0, 0, 0, 2, 0, 0, 2, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBe(0);
  });
  it("block winning move diagonal", () => {
    const board: Field[] = [0, 0, 2, 0, 2, 0, 0, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBe(6);
  });

  it("choose random move", () => {
    const board: Field[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
  });

  it("choose random move", () => {
    const board: Field[] = [0, 0, 0, 0, 2, 0, 0, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
    expect(result).not.toBe(4);
  });

  it("choose random move", () => {
    const board: Field[] = [0, 0, 0, 0, 2, 0, 0, 0, 0];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBe(6);
  });
});
