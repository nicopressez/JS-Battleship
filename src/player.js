import { Gameboard } from "./gameBoard";

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  playTurn(otherPlayer, x, y) {
    otherPlayer.board.receiveAttack(x, y);
  }
}

module.exports = { Player };
