import { player1, player2, startGame } from "./index";
import { gameCheck } from "./index";

let isPlayerTurn = true
let gameOver = false;

export const placeShipsGrid = () => {
  const shipPlacementContainer = document.getElementById("shipPlacement");
   const placementGridContainer = document.createElement("section");
  shipPlacementContainer.appendChild(placementGridContainer);
  placementGridContainer.classList.add("gridContainer");
  const currentShipName = document.getElementById("shipPlaced");
  currentShipName.textContent = "Carrier"

  // Generate an empty 10x10 grid for player to place their ships on
  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 9; y++) {
      const cell = document.createElement("div");
      cell.classList.add(`${x}${y}`);
      placementGridContainer.appendChild(cell);
      
      placementListener(cell);
      mouseOverListener(cell);

      }

}}

export const placementListener = (cell) => {
  cell.addEventListener('click', () => {

const currentShipName = document.getElementById("shipPlaced");
const placementTitle = document.getElementById("placeShipsTitle")
const x = Number(cell.getAttribute("class").charAt(0));
const y = Number(cell.getAttribute("class").charAt(1));

 if (currentShipName.textContent == "Carrier"){
 if (player1.board.placeShip(player1.board.carrier, x, y))
  {currentShipName.textContent = "Battleship";
   showNewShip(cell, player1.board.carrier);
}
  else console.log("Can't place the ship here")
}
 
 else if (currentShipName.textContent == "Battleship"){
  if (player1.board.placeShip(player1.board.battleship, x, y))
   {currentShipName.textContent = "Destroyer";
    showNewShip(cell, player1.board.battleship);
  }
   else console.log("Can't place the ship here")
  }
  
  else if (currentShipName.textContent == "Destroyer"){
    if (player1.board.placeShip(player1.board.destroyer, x, y))
     {currentShipName.textContent = "Submarine";
      showNewShip(cell, player1.board.destroyer);
    }
     else console.log("Can't place the ship here")
    }

    else if (currentShipName.textContent == "Submarine"){
      if (player1.board.placeShip(player1.board.submarine, x, y))
       {currentShipName.textContent = "Patrol Boat";
        showNewShip(cell, player1.board.submarine);
      }
       else console.log("Can't place the ship here")
      }

      else if (currentShipName.textContent == "Patrol Boat"){
        if (player1.board.placeShip(player1.board.patrolBoat, x, y))
         {
         currentShipName.textContent = "";
         placementTitle.textContent= "Click on start to play the game!";
         showNewShip(cell, player1.board.patrolBoat);
         addStartButton();
        }
         else console.log("Can't place the ship here")
        }
      
  })
}

export const mouseOverListener = (cell) => {
  const currentShipName = document.getElementById("shipPlaced");
  let currentCellClass = cell.classList.value;
  let shipLength;

  // Adjust shipLength based on current ship to place
  if (currentShipName.textContent === "Carrier") shipLength = 5;
  if (currentShipName.textContent === "Battleship") shipLength = 4;
  if (currentShipName.textContent === "Destroyer") shipLength = 3;
  if (currentShipName.textContent === "Submarine") shipLength = 3;
  if (currentShipName.textContent === "Patrol Boat") shipLength = 2;


  cell.addEventListener('mouseover', () => {
    // If the ship ends on the next row of cells, don't add preview
    let lastCellValue = +cell.classList.value +shipLength;
    if (lastCellValue.toString().charAt(0) !== currentCellClass.toString().charAt(0)) return;

    // Add the preview of the new ship on hover
    for (let i = 0; i < shipLength; i++) {
      let newCellClass = +currentCellClass + i;
      // If the number is between 0 and 9, add a first 0
      if (newCellClass < 10) newCellClass = "0" + newCellClass
      const thisCell = document.getElementsByClassName(`${newCellClass}`);
      thisCell[0].setAttribute("id", "mouseover");
      
    }})

  cell.addEventListener('mouseout', () => {
    for (let i = 0; i < shipLength; i++) {
      let newCellClass = +currentCellClass + i;
      // If the number is between 0 and 9, add a first 0
      if (newCellClass < 10) newCellClass = "0" + newCellClass
      const thisCell = document.getElementsByClassName(`${newCellClass}`);
      thisCell[0].removeAttribute("id", "mouseover");
      
    }
  }
  )
}

export const showNewShip = (cell,ship) => {
  let currentCellClass = cell.classList.value;
  const newShipLength = ship.length;

  for (let i = 0; i < newShipLength; i++) {
    let newCellClass = +currentCellClass + i;
    // If the number is between 0 and 9, add a first 0
    if (newCellClass < 10) newCellClass = "0" + newCellClass
    const thisCell = document.getElementsByClassName(`${newCellClass}`);
    thisCell[0].classList.add("ship");
    
  }

  cell.classList.add("ship");
}

export const addStartButton = () => {
  const body = document.querySelector("body");
  const shipPlacementContainer = document.getElementById("shipPlacement");
  const startBtn = document.createElement("button");
  shipPlacementContainer.appendChild(startBtn);

  startBtn.textContent = "Start";

  startBtn.addEventListener('click', () => {
    body.removeChild(shipPlacementContainer);
    startGame();
  })
}

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

      if (player.name === "player1") {
        if (player1.board.board[x][y] !== null) 
        cell.classList.add("ship");
      }

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

        if (!isPlayerTurn) return;
        if (gameOver) return;
        if (player2.board.board[x][y] === "hit" ||
        player2.board.board[x][y] === "miss" ) return;
      // If this is a ship, add class "ship" to the grid
      if (player2.board.board[x][y] !== null) {
        cell.classList.add("ship");
      } else {
        cell.classList.add("miss");
      }

      player1.playTurn(player2, x, y);
      isPlayerTurn = false;
      gameOver = gameCheck(player2, player1);
      // Computer will play after 3s
      if (!gameOver){
      setTimeout(() => {
        computerPlays()
        isPlayerTurn = true;
        gameOver = gameCheck(player1, player2);}, 
        300);
      }
    },
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
    attackedCell[0].classList.add("isHit");
  } else {
    attackedCell[0].classList.add("miss");
  }
};

export const endGameUI = (player) => {
    const body = document.querySelector("body");
    const announce = document.createElement("h1");

    if (player.name === "player1")  announce.textContent = "You won!";
    else announce.textContent = "You lost!";

    body.appendChild(announce);
}