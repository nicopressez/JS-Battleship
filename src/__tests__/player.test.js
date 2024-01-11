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
  test('Computer picks random numbers for turn', () => {
    expect(player2.randomTurn()).toBeGreaterThan(-1);
    expect(player2.randomTurn()).toBeLessThan(10);
  })
  test('Computer plays random round and hits', () =>{

    player1.board.placeShip(player1.board.carrier, 0, 5);
    player1.board.board[0][1] = "hit";
        

    
  })

});
