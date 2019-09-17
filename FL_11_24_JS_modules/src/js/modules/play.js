import showWinner from "./showWinner";
import getComputerChoice from "./getComputerChoice";
import getWinner from "./getWinner";
import {restart} from "../main";

export default function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}