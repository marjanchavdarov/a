import { createStore } from './store.js';
import { renderBoard, rollDice } from './ui.js';

const store = createStore();

window.onload = () => {
  renderBoard(store);
  document.getElementById('game-root').innerHTML += `
    <button id="roll">Roll Dice</button>
    <div class="dice" id="dice-display">🎲 - 🎲</div>
  `;
  document.getElementById('roll').onclick = () => {
    const [d1, d2] = rollDice(store);
    document.getElementById('dice-display').textContent = `🎲 ${d1} - 🎲 ${d2}`;
  };
};
