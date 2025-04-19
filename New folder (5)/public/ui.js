export function renderBoard(store) {
  const container = document.getElementById('game-root');
  const board = document.createElement('div');
  board.className = 'board';
  for (let i = 0; i < 24; i++) {
    const point = document.createElement('div');
    point.className = 'point';
    board.appendChild(point);
  }
  container.appendChild(board);
}

export function rollDice(store) {
  return store.rollDice();
}
