import { Field, Game, getBlanks, invertPlayer, isFull, isPlayer, Mode, newBoard, Player, won } from "./game";

describe("invert player", () => {
  it("invert player1 to player2", () => {
    const result: Field = invertPlayer(Field.PLAYER1);
    expect(result).toBe(Field.PLAYER2);
  });
  it("invert player2 to player1", () => {
    const result: Field = invertPlayer(Field.PLAYER2);
    expect(result).toBe(Field.PLAYER1);
  });
  it("return empty field as empty", () => {
    const result: Field = invertPlayer(Field.EMPTY);
    expect(result).toBe(Field.EMPTY);
  });
});

describe("add Win", () => {
  it("add win to player", () => {
    var player: Player = new Player(Field.PLAYER1);
    player.addWin();
    expect(player.score).toBe(1);
  });
});

describe("switchSides", () => {
  it("update score on switch", () => {
    var game: Game = new Game();
    game.player.addWin();
    game.switchSides();
    expect(game.enemy.score).toBe(1);
  });
});

describe("updateMode", () => {
  it("update mode to human", () => {
    var game: Game = new Game();
    game.updateMode(Mode.HUMAN);
    expect(game.mode).toBe(Mode.HUMAN);
  });
});

describe("newBoard", () => {
  it("check new board", () => {
    var board: Field[] = new Array<Field>(9);
    for (var i = 0; i < 9; i++) {
      board[i] = Field.EMPTY;
    }
    expect(newBoard()).toEqual(board);
  });
});


describe("isFull", () => {
  it("check full board", () => {
    var board: Field[] = new Array<Field>(9);
    for (var i = 0; i < 9; i++) {
      if(i % 2 == 0){
        board[i] = Field.PLAYER1;
      }
      else{
        board[i] = Field.PLAYER2;
      }

    }
    expect(isFull(board)).toBe(true);
  });

  it("check not full board", () => {
    var board: Field[] = newBoard();
    for (var i = 0; i < 9; i++) {
      if(i > 7){
        board[i] = Field.PLAYER1;
      }
    }
    expect(isFull(board)).toBe(false);
  });
});

describe("won", () => {
  it("check player1 row win", () => {
    var board: Field[] = 
    [Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER2,
    Field.PLAYER2,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY];   
    expect(won(board)).toBe(Field.PLAYER1);
  });

  it("check player2 column win", () => {
    var board: Field[] = 
    [Field.PLAYER2,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER2,
    Field.PLAYER2,
    Field.EMPTY,
    Field.PLAYER2,
    Field.EMPTY,
    Field.EMPTY];   
    expect(won(board)).toBe(Field.PLAYER2);
  });

  it("check player1 diagonal win", () => {
    var board: Field[] =
    [Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER2,
    Field.PLAYER2,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1];
    expect(won(board)).toBe(Field.PLAYER1);
  });

  it("check draw on empty board", () => {
    var board: Field[] = newBoard();
    expect(won(board)).toBe(Field.EMPTY);
  });

  it("check draw on full board", () => {
    var board: Field[] = 
    [Field.PLAYER1,
    Field.PLAYER2,
    Field.PLAYER1,
    Field.PLAYER2,
    Field.PLAYER2,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER2];   
    expect(won(board)).toBe(Field.EMPTY);
  });
});

describe("getBlanks", () => {
  it("getBlanks on empty Board", () => {
    var board: Field[] = newBoard();
    expect(getBlanks(board).length).toEqual(9);
  });

  it("getBlanks on Board",() => {
    var board: Field[] =
    [Field.PLAYER1,
    Field.PLAYER1,
    Field.EMPTY,
    Field.PLAYER2,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY];
    expect(getBlanks(board)).toEqual([2, 4, 5, 7, 8]);
  });
});

describe("isPlayer", () => {
  it("check player1", () => {
    expect(isPlayer(Field.PLAYER1)).toBe(true);
  });

  it("check player2", () => {
    expect(isPlayer(Field.PLAYER2)).toBe(true);
  });
  it("check empty field", () => {
    expect(isPlayer(Field.EMPTY)).toBe(false);
  });
});