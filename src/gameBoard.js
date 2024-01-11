import { Ship } from "./index";

export class Gameboard{
    constructor(){
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.destroyer = new Ship(3);
    this.submarine = new Ship(3);
    this.patrolBoat = new Ship(2);
    }

    board =  Array.from({length: 10}, () => new Array(10).fill(null));

    placeShip(type, x,y){
        for (let i = 0; i <= type.length -1; i++){
            this.board[x][y + i] = type;
        }
    }
    receiveAttack(x,y){
        if (this.board[x][y] === null) this.board[x][y] = "miss";
        else {
            this.board[x][y].hit();
            this.board[x][y] = "hit";}
    }
}


module.exports = {
                  Gameboard};