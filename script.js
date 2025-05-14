// variable for result div
const result = document.querySelector("#results");

// computer choice
// returns random selection: rock, paper, scissors
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

// function to add text using DOM methods
function addText(text) {

  // create paragraph element
  const p = document.createElement("p");

  // use input as text content
  p.textContent = text;

  // append element to div
  result.appendChild(p);

}

// counters for playRound function
let scores = {
  humanScore: 0,
  computerScore: 0
}

// play one round
// void function that iterates points based on round
function playRound(userPrompt) {

  // clear text
  result.textContent = "";

  // initialize choices in the beginning of round
  const humanChoice = userPrompt;
  const computerChoice = getComputerChoice();

  // intro
  addText("Rock Paper Scissors!");

  // human choice
  // result.textContent = "Your choice: " + humanChoice;
  addText("Your choice: " + humanChoice);

  // computer choice
  // result.textContent = "Computer choice: " + computerChoice;
  addText("Computer choice: " + computerChoice);
  
  // game mechanics
  if (humanChoice == computerChoice) {

    addText("Tie!");
    scores.humanScore++;
    scores.computerScore++;

  }
  if (humanChoice == "rock" && computerChoice == "paper") {

    addText("Rock loses to Paper!");
    scores.computerScore++;

  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    
    addText("Paper beats Rock!");
    scores.humanScore++;

  }
  if (humanChoice == "rock" && computerChoice == "scissors") {

    addText("Rock beats Scissors!");
    scores.humanScore++;

  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    
    addText("Scissors loses to Rock!");
    scores.computerScore++;

  }
  if (humanChoice == "scissors" && computerChoice == "paper") {

    addText("Scissors beats Paper!");
    scores.humanScore++;

  }
  if (humanChoice == "paper" && computerChoice == "scissors") {

    addText("Paper loses to Scissors!");
    scores.computerScore++;

  }
  
  // scores
  addText("Your score: " + scores.humanScore);
  addText("Computer score: " + scores.computerScore);

  // check if game finished, and declare winner
  checkWinner();
  
}

// helper function to check end of game
// returns msg to declare winner
function checkWinner() {

  // check if one player has reached 5 points
  if ((scores.humanScore == 5) || scores.computerScore == 5) {

    // declare winner
    if (scores.humanScore == scores.computerScore) {
      addText("You tied!");
    }
    else if (scores.humanScore > scores.computerScore) {
      addText("You win!");
    }
    else { // if human score < scores.computerScore
      addText("You lose!");
    }

    // reset score once winner declared
    scores.humanScore = 0;
    scores.computerScore = 0;
    
  }

}

// play game
// void function that runs game until a player reaches 5 points
function playGame() {

  // reset score
  scores.humanScore = 0;
  scores.computerScore = 0;

  // intro
  alert("Rock, Paper or Scissors:");
  
  // DOM variables for buttons
  const rock = document.querySelector("#rockBtn");
  const paper = document.querySelector("#paperBtn");
  const scissors = document.querySelector("#scissorsBtn");
  
  // event listener that calls playRound with click
  rock.addEventListener("click", () => {playRound("rock")});
  paper.addEventListener("click", () => {playRound("paper")});
  scissors.addEventListener("click", () => {playRound("scissors")});

  // 

}

document.addEventListener("DOMContentLoaded", playGame);