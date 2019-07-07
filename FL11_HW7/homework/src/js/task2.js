let User = {
  onGame: false,
  attempts: 3,
  totalPrize: 0,
  possiblePrize: 0,
  currentPrize: 0,
  guess: undefined,
  nextGame: true,
  firstAttempt: 3,
  secondLastAttempt: 2
};
let Game = {
  multiplierForRandomNumb: 0,
  stepForMultiplierForRandomNumb: 4,
  currentRandomNumber: undefined,
  multiplierForPrize: 2,
  startRandomNumbers: 8,
  firstPrize: 100,
  secondPrize: 50,
  thirdPrize: 25,
  randomNumber: undefined
};
User.onGame = confirm('Do you want to play a game?');
if (!User.onGame) {
  alert('You did not become a billionaire, but can');
}
while (User.onGame) {
  Game.currentRandomNumber = Game.startRandomNumbers + Game.multiplierForRandomNumb;
  Game.randomNumber = Math.floor(Math.random() * (Game.startRandomNumbers + Game.multiplierForRandomNumb) + 1);
  User.nextGame = true;
  for (; User.attempts >= 1 && (User.onGame === true && User.nextGame !== false); User.attempts--) {
    if (User.attempts === User.firstAttempt) {
      User.possiblePrize = Game.firstPrize;
    } else if (User.attempts === User.secondLastAttempt) {
      User.possiblePrize = Game.secondPrize;
    } else {
      User.possiblePrize = Game.thirdPrize;
    }
    User.guess =+ prompt(`Enter the number from 0 to ${Game.currentRandomNumber}
    \nAttempts left: ${User.attempts}
    \nTotal prize: ${User.totalPrize}$
    \nPossible prize on current attempt: ${User.possiblePrize}$`, '0');
    if (User.guess === Game.randomNumber) {
      switch (User.attempts) {
        case User.firstAttempt:
          User.currentPrize = Game.firstPrize;
          User.onGame = false;
          break;
        case User.secondLastAttempt:
          User.currentPrize = Game.secondPrize;
          User.onGame = false;
          break;
        case 1:
          User.currentPrize = Game.thirdPrize;
          User.onGame = false;
          break;
        default:
          User.onGame = false;
      }
      User.totalPrize = User.currentPrize + User.totalPrize;
      User.onGame = confirm('Congratulation, you won! Your prize is: ' + User.totalPrize + '$'
          + ' Do you want to play again?');
      if (!User.onGame) {
        User.onGame = confirm('You can still change your mind');
      }
      if (User.onGame === true) {
        Game.multiplierForRandomNumb = Game.multiplierForRandomNumb + Game.stepForMultiplierForRandomNumb;
        Game.firstPrize = Game.firstPrize * Game.multiplierForPrize;
        Game.secondPrize = Game.secondPrize * Game.multiplierForPrize;
        Game.thirdPrize = Game.thirdPrize * Game.multiplierForPrize;
        User.possiblePrize = 0;
        User.currentPrize = 0;
        User.nextGame = false;
      }
    } else if (User.attempts === 1) {
      alert('Thank you for your participation. Your prize is: ' + User.totalPrize + '$');
      User.onGame = confirm('Do you want to play again?');
    }
  }
  if (User.currentPrize === 0 && User.onGame === true) {
    User.attempts = 3;
  }
}