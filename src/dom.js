import { player1, player2, restartGame, startGame } from "./index";
import { gameCheck } from "./index";

let isPlayerTurn = true
let gameOver = false;

export const generateBoard = (player) => {
  isPlayerTurn = true;
  gameOver = false;
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

      if (player.name === "player1") {
        if (player1.board.board[x][y] !== null) 
        cell.classList.add("ship");
      }

      // Add event listener only to the computer's grid

      if (player.name === "player2") {attackListener(cell)
      console.log("add listeners")};
    }
  }
};

const attackHandler = (event) => {
  const x = Number(cell.getAttribute("class").charAt(0));
  const y = Number(cell.getAttribute("class").charAt(1));
  if (!isPlayerTurn) return;
  if (gameOver) return;
  if (player2.board.board[x][y] === "hit" || player2.board.board[x][y] === "miss") return;

  if (player2.board.board[x][y] !== null) {
    cell.classList.add("ship");
  } else {
    cell.classList.add("miss");
  }

  player1.playTurn(player2, x, y);
  isPlayerTurn = false;
  gameOver = gameCheck(player2, player1);

  if (!gameOver) {
    setTimeout(() => {
      computerPlays();
      isPlayerTurn = true;
      gameOver = gameCheck(player1, player2);
    }, 300);
  }
};

const attackListener = (cell) => {
  cell.addEventListener('click', attackHandler);
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
    attackedCell[0].classList.add("isHit");
  } else {
    attackedCell[0].classList.add("miss");
  }
};

export const endGameUI = (player) => {
    const body = document.querySelector("body");
    const announce = document.createElement("h1");
    const restartBtn = document.createElement("button");

    if (player.name === "player1")  announce.textContent = "You won!";
    else announce.textContent = "You lost!";

    body.appendChild(announce);
    body.appendChild(restartBtn);
    restartBtn.textContent = "New game";

    restartBtn.addEventListener("click", () => {
      restartGame()
      body.removeChild(announce);
      body.removeChild(restartBtn)});
}

export const clearGrids = () => {
  removeEventListeners("player2");

  const body = document.querySelector("body");
  const grid1 = document.getElementsByClassName("player1");
  const grid2 = document.getElementsByClassName("player2");

  body.removeChild(grid1[0]);
  body.removeChild(grid2[0]);
}

const removeEventListeners = (playerName) => {
  const cells = document.querySelectorAll(`.${playerName} .gridContainer div`);

  cells.forEach(cell => {
    cell.removeEventListener('click', attackHandler);
  });

  const clonedGrid = document.querySelector(`.${playerName}`);
  const newGrid = clonedGrid.cloneNode(true);
  clonedGrid.parentNode.replaceChild(newGrid, clonedGrid);
};
