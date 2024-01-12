import { endGameUI } from "./dom";

export const gameCheck = (otherPlayer, player) =>{
    if (otherPlayer.board.allSunk()) {
    endGameUI(player);
    return true;
//    endGame();
    }
    else return false;
}