import { Player } from "./player";
import { endGameUI } from "./dom";
import { generateBoard, clearGrids } from "./dom";
import { placeShipsGrid } from "./preGameDOM";

export let player1 = new Player("player1");
export let player2 = new Player("player2");

export const gameCheck = (otherPlayer, player) => {
  if (otherPlayer.board.allSunk()) {
    endGameUI(player);
    return true;
  } else return false;
};

export const startGame = () => {
  randomizeComputerShips();
  generateBoard(player1);
  generateBoard(player2);
  console.log(player2.board);
};

export const restartGame = () => {
  player1 = new Player("player1");
  player2 = new Player("player2");

  clearGrids();
  placeShipsGrid();
};

const randomizeComputerShips = () => {
  const randomX = () => Math.floor(Math.random() * 10);
  const randomY = () => Math.floor(Math.random() * 10);

  const placeCarrier = () => {
    if (player2.board.placeShip(player2.board.carrier, randomX(), randomY()))
      return true;
    else return placeCarrier();
  };

  const placeBattleShip = () => {
    if (player2.board.placeShip(player2.board.battleship, randomX(), randomY()))
      return true;
    else return placeBattleShip();
  };

  const placeDestroyer = () => {
    if (player2.board.placeShip(player2.board.destroyer, randomX(), randomY()))
      return true;
    else return placeDestroyer();
  };

  const placeSubmarine = () => {
    if (player2.board.placeShip(player2.board.submarine, randomX(), randomY()))
      return true;
    else return placeSubmarine();
  };
  const placePatrolBoat = () => {
    if (player2.board.placeShip(player2.board.patrolBoat, randomX(), randomY()))
      return true;
    else return placePatrolBoat();
  };

  placeCarrier();
  placeBattleShip();
  placeDestroyer();
  placeSubmarine();
  placePatrolBoat();
};
placeShipsGrid();
