import { GameBoard } from "./gameBoard";
import { Player } from "./player";
import { Ship } from "./ships";

export const generateBoard = (player) =>  {
// Generate 10x10 grid
const body = document.querySelector("body");
const gridContainer = document.createElement("section");
body.appendChild(gridContainer);
gridContainer.classList.add("gridContainer");

// If it's a ship, class = ship
// If it's null, class = empty
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            const cell = document.createElement("div");
            if (player.board.board[x][y] === null) {
                cell.classList.add("empty");
              } else {
                cell.classList.add("ship");
              }
              gridContainer.appendChild(cell);
            }
    }
    }