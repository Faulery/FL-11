import { modal, scoreboard, score, result } from "../main";

export default function showWinner (winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}</strong></p>
    `;
  }
  if (scoreboard.computer === 2) {
    alert('Computer won!')
  } else if (scoreboard.player === 2) {
    alert('Player won!')
  } else {
    // Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  }
  modal.style.display = 'block';
}