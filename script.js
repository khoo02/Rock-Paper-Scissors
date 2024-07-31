// computer choice
function getComputerChoice(min, max) {
  // generate random number
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  // determine rock paper scissors
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// human choice
function getHumanChoice() {
  // user prompt
  let userPrompt = prompt("Rock, Paper or Scissors:");

  // return user input
  switch (userPrompt.toLowerCase()) {
    case "rock":
    case "paper":
    case "scissors":
      return userPrompt.toLowerCase();
    // error check
    default:
      return "invalid choice";
  }
}

// score
let humanScore = 0;
let computerScore = 0;

// player choices
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// game round
function playRound(humanScore, computerScore) {}
