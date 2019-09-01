import css from '../css/style.css';

import play from './modules/play';
import clearModal from './modules/clearModal';
import restartGame from './modules/restartGame';

const choices = document.querySelectorAll('.choice');
export const score = document.getElementById('score');
export const result = document.getElementById('result');
export const restart = document.getElementById('restart');
export const modal = document.querySelector('.modal');

export const scoreboard = {
  player: 0,
  computer: 0
};

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);