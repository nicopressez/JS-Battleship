/*import { endGameUI, generateBoard, placeShipsGrid} from "./dom";
import { Player } from "./player";
import { Gameboard } from "./gameBoard";

export const player1 = new Player("player1");
export const player2 = new Player("player2");

placeShipsGrid();

export const gameCheck = (otherPlayer, player) =>{
    if (otherPlayer.board.allSunk()) {
    endGameUI(player);
    return true;
//    endGame();
    }
    else return false;
}

//export const startGame = () => {

    player1.board.placeShip(player1.board.carrier, 0, 0);
    player1.board.placeShip(player1.board.battleship, 1, 0);
    player1.board.placeShip(player1.board.destroyer, 2, 0);
    player1.board.placeShip(player1.board.submarine, 3, 0);
    player1.board.placeShip(player1.board.patrolBoat, 4, 0);

player2.board.placeShip(player2.board.carrier, 0, 1);
player2.board.placeShip(player2.board.battleship, 1, 1);
player2.board.placeShip(player2.board.destroyer, 2, 3);
player2.board.placeShip(player2.board.submarine, 3, 4);
player2.board.placeShip(player2.board.patrolBoat, 4, 2);

generateBoard(player1);
generateBoard(player2);
//}

placeShipsGrid();
//startGame();*/
