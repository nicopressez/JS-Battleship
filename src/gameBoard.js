import { Ship } from "./ships";

export class Gameboard {
  constructor() {
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.destroyer = new Ship(3);
    this.submarine = new Ship(3);
    this.patrolBoat = new Ship(2);
  }

  board = Array.from({ length: 10 }, () => new Array(10).fill(null));

  placeShip(type, x, y) {
    const enoughSpace = (type, x, y) => {
      for (let i = 0; i <= type.length - 1; i++) {
        if (this.board[x][y + i] !== null) return false;
      }
      return true;
    };

    if (enoughSpace(type, x, y)) {
      for (let i = 0; i <= type.length - 1; i++) {
        this.board[x][y + i] = type;
      }
      return true;
    } else return false;
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === null) this.board[x][y] = "miss";
    else {
      this.board[x][y].hit();
      this.board[x][y] = "hit";
    }
  }
  allSunk() {
    if (
      this.carrier.sunk === true &&
      this.battleship.sunk === true &&
      this.destroyer.sunk === true &&
      this.submarine.sunk === true &&
      this.patrolBoat.sunk === true
    )
      return true;
    else return false;
  }
}

/*module.exports = {
  Gameboard,
};
*/
