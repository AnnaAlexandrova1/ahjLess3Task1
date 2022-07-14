export default class Board {
  constructor() {
    this.board = undefined;
  }

  drowBoard(number) {
    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < (Math.floor(number) ** 2); i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
    this.board = board;
    document.body.appendChild(board);
  }

  getBoard(number) {
    this.drowBoard(number);
    return this.board;
  }
}
