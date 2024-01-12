import { GameBoard } from "./gameBoard";
import { Player } from "./player";
import { Ship } from "./ships";
import { player1, player2 } from ".";

export const generateBoard = (player) =>  {
    
    
// Generate 10x10 grid
const body = document.querySelector("body");
const gridContainer = document.createElement("section");
body.appendChild(gridContainer);

gridContainer.classList.add("gridContainer");
gridContainer.classList.add(player.name)

    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            const cell = document.createElement("div");
            cell.classList.add(`${x}${y}`);
            if (player.board.board[x][y] === null) {
              } else {
              }
              gridContainer.appendChild(cell);
              attackListener(cell, player);
            }
    }
    }

    const attackListener = (cell, player) => {
        let otherPlayer;
        if (player.name === "player1") otherPlayer = player2;
        else otherPlayer = player1;

        cell.addEventListener('click', (e) => {
            player.playTurn(player, Number(cell.getAttribute('class').charAt(0)), Number(cell.getAttribute('class').charAt(1)));

            // If this is a ship, add class "ship" to the grid
            if (otherPlayer.board.board[Number(cell.getAttribute('class').charAt(0))]
                [Number(cell.getAttribute('class').charAt(1))] !== null) {
                    cell.classList.add("ship");
                }
                else cell.classList.add("miss");})
            // Otherwise, add "miss"
    }