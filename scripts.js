// rock paper scissors against computer.
// User input
// computer input
// calculate who wins
// record win loss draw
// ask to play again?

var gameOutcome;
var draws = 0;
var wins = 0;
var losses = 0;

while (true) {
  // game input
  let playerChoice = prompt("Rock, paper or scissors?");
  var playerChoiceLC = playerChoice.toLowerCase();

  let computerChoice = Math.floor(Math.random() * 3);
  var computerChoiceLC;
  if (computerChoice == 0) {
    computerChoiceLC = "rock";
  } else if (computerChoice == 1) {
    computerChoiceLC = "paper";
  } else {
    computerChoiceLC = "scissors";
  }
  console.log(playerChoiceLC);
  console.log(computerChoiceLC);

  // game logic
  if (playerChoiceLC == computerChoiceLC) {
    gameOutcome = "Draw";
  } else if (
    (playerChoice == "rock" && computerChoiceLC == "scissors") ||
    (playerChoice == "paper" && computerChoiceLC == "rock") ||
    (playerChoice == "scissors" && computerChoiceLC == "paper")
  ) {
    gameOutcome = "Player wins";
  } else {
    gameOutcome = "Computer wins";
  }

  if (gameOutcome == "Draw") {
    draws = draws + 1;
  } else if (gameOutcome == "Player wins") {
    wins = wins + 1;
  } else {
    losses = losses + 1;
  }

  //   print results
  console.log(gameOutcome);
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Draws: " + draws);
  if (gameOutcome == "Draw") {
    alert("It was a draw!");
  } else if (gameOutcome == "Player wins") {
    alert("You won!");
  } else {
    alert("You lost!");
  }

  //   play again
  let playAgain = confirm("Play again?");
  if (playAgain == true) {
    continue;
  } else {
    break;
  }
}
