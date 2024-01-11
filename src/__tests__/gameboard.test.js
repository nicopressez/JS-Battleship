const { describe, beforeEach, test, expect } = require('@jest/globals');

const Gameboard = require("../gameBoard").Gameboard;

describe('Gameboard functions tests', () => {
    let testBoard;
    beforeEach(() => {
        testBoard =  new Gameboard();
    })
    test('Check that all arrays in Board are defined',() =>{
        for (let y = 0; y <= 9; y++) {
          for (let i = 0; i <= 9; i++) {
              expect(testBoard.board[y][i]).not.toBe(undefined);        
          }
     }
    })
    test('Boats are placed according to coordinates', () =>{

        testBoard.placeShip(testBoard.carrier, 0, 2);
        testBoard.placeShip(testBoard.battleship, 1, 3);
        testBoard.placeShip(testBoard.submarine, 2, 4);

       expect(testBoard.board[0][6]).toBe(testBoard.carrier);
       expect(testBoard.board[1][6]).toBe(testBoard.battleship)
       expect(testBoard.board[2][4]).toBe(testBoard.submarine)
    })
})