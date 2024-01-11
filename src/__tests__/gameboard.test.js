const { describe, beforeEach, test, expect } = require("@jest/globals");

const Gameboard = require("../gameBoard").Gameboard;

describe("Gameboard functions tests", () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });
  test("Check that all arrays in Board are defined", () => {
    for (let y = 0; y <= 9; y++) {
      for (let i = 0; i <= 9; i++) {
        expect(testBoard.board[y][i]).not.toBe(undefined);
      }
    }
  });
  test("Boats are placed according to coordinates", () => {
    testBoard.placeShip(testBoard.carrier, 0, 2);
    testBoard.placeShip(testBoard.battleship, 1, 3);
    testBoard.placeShip(testBoard.submarine, 2, 4);

    expect(testBoard.board[0][6]).toBe(testBoard.carrier);
    expect(testBoard.board[1][6]).toBe(testBoard.battleship);
    expect(testBoard.board[2][4]).toBe(testBoard.submarine);
  });
  test("Boats are not placed if there is not enough space left", () =>{
    expect(testBoard.placeShip(testBoard.submarine, 0, 9)).toBe("error");
  })
  test("Gameboard hits based on coordinates and array changes", () => {
    testBoard.receiveAttack(0, 2);
    expect(testBoard.board[0][2]).toBe("miss");
  });
  test("When a ship is hit, change its hitIndex", () => {
    testBoard.placeShip(testBoard.carrier, 0, 2);
    testBoard.receiveAttack(0, 3);
    testBoard.receiveAttack(0, 4);
    expect(testBoard.board[0][2].hitIndex).toBe(2);
    expect(testBoard.board[0][3]).toBe("hit");
    expect(testBoard.carrier.hitIndex).toBe(2);
  });
  test("When a ship is hit enough times, it changes to sunk", () => {
    testBoard.placeShip(testBoard.patrolBoat, 1, 1);
    testBoard.receiveAttack(1, 1);
    testBoard.receiveAttack(1, 2);
    expect(testBoard.patrolBoat.sunk).toBe(true);
  });
  test("When all ships are sunk, report it", () => {
    testBoard.carrier.sunk = true;
    testBoard.battleship.sunk = true;
    testBoard.destroyer.sunk = true;
    testBoard.submarine.sunk = true;
    testBoard.patrolBoat.sunk = true;

    expect(testBoard.allSunk()).toBe(true);
  });
});
