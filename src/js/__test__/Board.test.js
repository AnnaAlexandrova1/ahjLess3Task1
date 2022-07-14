import Board from '../Board';

test('Создание игрового поля', () => {
  const board = new Board();
  const cells = board.getBoard(4);
  const received = cells.querySelectorAll('.cell');
  expect(received.length).toBe(4 ** 2);
});
