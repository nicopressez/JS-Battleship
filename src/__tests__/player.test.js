const { describe, beforeEach, test, expect } = require("@jest/globals");

const Player = require("../player").Player;
const Gameboard = require("../gameBoard").Gameboard;

describe("Player function tests", () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = new Player();
    player2 = new Player();
  });
  test("Player can hit the opponent board", () => {
    player2.board.placeShip(player2.board.carrier, 0, 0);
    player1.playTurn(player2, 0, 0);
    expect(player2.board.board[0][0]).toBe("hit");
  });
  test("Computer plays random round again if cell is already hit/miss", () => {
    const mockRandom = jest.spyOn(Math, "random");
    const randomTurnSpy = jest.spyOn(player2, "randomTurn");

    // Mocking random numbers values for first turn
    mockRandom.mockReturnValueOnce(0.8);
    mockRandom.mockReturnValueOnce(0.8);

    // Mocking random numbers values for first turn
    mockRandom.mockReturnValueOnce(0.9);
    mockRandom.mockReturnValueOnce(0.9);

    // Board has already been hit for the decided values
    player1.board.board[8][8] = "hit";
    player1.board.board[9][9] = "hit";

    player2.randomTurn(player1);
    expect(randomTurnSpy).toHaveBeenCalledTimes(3);

    mockRandom.mockRestore();
  });
});
