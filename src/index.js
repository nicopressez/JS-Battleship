import { Gameboard } from "./gameBoard";


export class Ship{
    constructor(length) {
        this.length = length;
        this.sunk = false;
        this.hitIndex = 0;       
    }
    hit(){
        this.hitIndex++;
        this.isSunk();
    }
    isSunk(){
        if (this.hitIndex == this.length) this.sunk = true;
    }
}

module.exports = {Ship};