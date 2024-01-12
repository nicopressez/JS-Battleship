import { Gameboard } from "./gameBoard";

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  playTurn(otherPlayer, x, y) {
    otherPlayer.board.receiveAttack(x, y);
  }
  randomTurn(otherPlayer ){
    const randomX = () => Math.floor(Math.random()*10);
    const randomY = () => Math.floor(Math.random()*10);
    let x = randomX()
    let y = randomY()

    if (otherPlayer.board.board[x][y] !== "miss" && otherPlayer.board.board[x][y] !== "hit")
   {this.playTurn(otherPlayer, x, y)}
  else this.randomTurn(otherPlayer);
  }}


module.exports = { Player };
