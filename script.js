// computer choice
function getComputerChoice() {
  // generate random number
  let randomNumber = Math.floor(Math.random() * 3 + 1);

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
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// play one round
function playRound(humanChoice, computerChoice) {
  // intro
  console.log("Rock Paper Scissors!");

  // human choice
  console.log("Your choice: " + humanChoice);

  // computer choice
  console.log("Computer choice: " + computerChoice);
  
  // game mechanics
  if (humanChoice == computerChoice) {
    console.log("Tie!");
    humanScore++;
    computerScore++;
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Rock loses to Paper!");
    computerScore++;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper beats Rock!");
    humanScore++;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock beats Scissors!");
    humanScore++;
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Scissors loses to Rock!");
    computerScore++;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors beats Paper!");
    humanScore++;
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Paper loses to Scissors!");
    computerScore++;
  }

  // scores
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

// play game
function playGame() {
  // play 5 rounds
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  
  // winner
  if (humanScore == computerScore) {
    console.log("You tied!");
  }
  else if (humanScore > computerScore) {
    console.log("You win!");
  }
  else {
    console.log("You lose!");
  }
}

playGame();