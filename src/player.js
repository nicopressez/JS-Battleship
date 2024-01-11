import { Gameboard } from "./gameBoard";

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  playTurn(otherPlayer, x, y) {
    otherPlayer.board.receiveAttack(x, y);
  }
  randomTurn(otherPlayer ){
    const randomX = Math.floor(Math.random()*10);
    const randomY = Math.floor(Math.random()*10);
    this.playTurn(otherPlayer, randomX,randomY);
  }
}

module.exports = { Player };
