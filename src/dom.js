import { GameBoard } from "./gameBoard";
import { Player } from "./player";
import { Ship } from "./ships";
import { player1, player2 } from "./index";

export const generateBoard = (player) => {
  // Generate 10x10 grid
  const body = document.querySelector("body");
  const gridContainer = document.createElement("section");
  body.appendChild(gridContainer);

  gridContainer.classList.add("gridContainer");
  gridContainer.classList.add(player.name);

  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 9; y++) {
      const cell = document.createElement("div");
      cell.classList.add(`${x}${y}`);
      gridContainer.appendChild(cell);

      // Add event listener only to the computer's grid

      if (player.name === "player2") attackListener(cell);
    }
  }
};

const attackListener = (cell) => {
  cell.addEventListener(
    "click",
    () => {
      const x = Number(cell.getAttribute("class").charAt(0));
      const y = Number(cell.getAttribute("class").charAt(1));
      // If this is a ship, add class "ship" to the grid
      if (player2.board.board[x][y] !== null) {
        cell.classList.add("ship");
      } else {
        cell.classList.add("miss");
      }

      player1.playTurn(player2, x, y);
      // Computer will play after 3s
      setTimeout(() => computerPlays(), 300);
    },

    { once: true },
  );
};

const computerPlays = () => {
  const attackedCoord = player2.randomTurn(player1);
  const player1Container = document.getElementsByClassName("player1");
  const attackedCell = player1Container[0].getElementsByClassName(
    `${attackedCoord}`,
  );

  const x = attackedCoord.charAt(0);
  const y = attackedCoord.charAt(1);

  // Update the cell that was attacked on player's grid
  if (player1.board.board[x][y] === "hit") {
    attackedCell[0].classList.add("ship");
  } else {
    attackedCell[0].classList.add("miss");
  }
};
