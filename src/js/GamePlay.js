export default class GamePlay {
    constructor(board, size) {
      this.board = board;
      this.size = size;
      this.position = undefined;
      this.activePosition = null;
    }
  
    createPosition() {
      this.cells = Array.from(document.getElementsByClassName('cell'));
  
      let position = Math.floor(Math.random() * this.size ** 2);
      if (this.position === position) {
        position = Math.floor(Math.random() * this.size ** 2);
      }
      this.removePosition();
      this.position = position;
      this.addPosition();
    }
  
    removePosition() {
      if (this.position !== undefined) {
        this.cells[this.position].classList.remove('goblin');
      }
    }
  
    addPosition() {
      this.cells[this.position].classList.add('goblin');
    }
  
    start() {
      this.createPosition();
      setInterval(() => { this.createPosition(); }, 1000);
    }
  }
  