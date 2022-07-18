export default class GamePlay {
  constructor(board, size) {
    this.board = board;
    this.size = size;
    this.position = undefined;
    this.activePosition = null;
  }

  init() {
    const body = document.querySelector('body');
    body.insertBefore(this.createGoblinCounter(), body.firstChild);
    this.cells = Array.from(document.getElementsByClassName('cell'));
    this.cells.forEach((e) => e.addEventListener('click', this.onBoardClick.bind(this)));
    this.start();
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

  createGoblinCounter() {
    this.goblinCounter = document.createElement('div');
    this.goblinCounter.classList.add('countInfo');
    this.goblinCounter.innerHTML = 'Убито гоблинов:<span class="dead">0</span><br>Промахов: <span class="lost">0</span><br>';
    return this.goblinCounter;
  }

  onBoardClick(event) {
    event.preventDefault();
    this.dead = document.querySelector('.dead');
    this.lost = document.querySelector('.lost');

    // this.cells.forEach((callback) => callback(event.target));
    if (event.target.classList.contains('goblin')) {
      ++this.dead.textContent;
      event.target.classList.remove('goblin');
    } else {
      ++this.lost.textContent;
    }

    if (this.dead.textContent >= 5) {
      // alert('Вы Выиграли');
      this.resetStore();
    }

    if (this.lost.textContent >= 5) {
      // alert('Вы проиграли');
      this.resetStore();
    }

    this.changeCoursor();
  }

  changeCoursor() {
    this.cells = Array.from(document.getElementsByClassName('cell'));
    this.cells.forEach((e) => e.classList.add('hummer'));
  }

  resetStore() {
    this.lost.textContent = 0;
    this.lost.textContent = 0;
  }

  start() {
    this.createPosition();
    setInterval(() => { this.createPosition(); }, 1000);
  }
}
