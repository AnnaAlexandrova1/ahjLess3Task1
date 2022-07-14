import Board from './Board';
import GamePlay from './GamePlay';

const board = new Board();
board.drowBoard(4);
const gamePlay = new GamePlay(board, 4);
gamePlay.init();
