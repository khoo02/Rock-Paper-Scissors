// DOM references for the results div and scoreboard display elements
const result = document.querySelector("#results");
const humanScoreEl = document.querySelector("#humanScore");
const computerScoreEl = document.querySelector("#computerScore");

// Step 2: Get the computer choice
// Randomly returns one of "rock", "paper", or "scissors"
// Math.random() returns a number >= 0 and < 1, multiplied by 3 and floored
// to give an index of 0, 1, or 2 into the choices array
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Helper: creates a <p> element with the given text and optional CSS class,
// then appends it to the results div
function addText(text, className = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.className = className;
  result.appendChild(p);
}

// Step 4: Score variables declared in the global scope and initialized to 0
// Stored as an object so both values travel together
let scores = { humanScore: 0, computerScore: 0 };

// Helper: syncs the score object values to the scoreboard elements in the DOM
function updateScoreboard() {
  humanScoreEl.textContent = scores.humanScore;
  computerScoreEl.textContent = scores.computerScore;
}

// Step 5: Play a single round
// Takes the human's choice as an argument, gets a computer choice,
// logs the result to the page, and increments the correct score
function playRound(humanChoice) {
  // Clear previous round's output
  result.textContent = "";

  // Get a fresh computer choice each round
  const computerChoice = getComputerChoice();

  // Show both choices
  addText("Round result", "result-intro");
  addText("You chose: " + humanChoice);
  addText("Computer chose: " + computerChoice);

  // Game logic: compare choices and update scores
  if (humanChoice === computerChoice) {
    // Tie — both players score a point
    addText("Tie!", "result-tie");
    scores.humanScore++;
    scores.computerScore++;
  } else if (
    (humanChoice === "rock"     && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")   ||
    (humanChoice === "paper"    && computerChoice === "rock")
  ) {
    // Human wins this round
    const msgs = {
      rock:     "Rock beats Scissors!",
      scissors: "Scissors beats Paper!",
      paper:    "Paper beats Rock!"
    };
    addText(msgs[humanChoice], "result-win");
    scores.humanScore++;
  } else {
    // Computer wins this round
    const msgs = {
      rock:     "Paper beats your Rock!",
      scissors: "Rock beats your Scissors!",
      paper:    "Scissors beat your Paper!"
    };
    addText(msgs[humanChoice], "result-lose");
    scores.computerScore++;
  }

  // Reflect updated scores in the scoreboard, then check if game is over
  updateScoreboard();
  checkWinner();
}

// Helper: checks if either player has reached 5 points
// If so, declares a winner and resets scores for a new game
function checkWinner() {
  if (scores.humanScore >= 5 || scores.computerScore >= 5) {
    if (scores.humanScore === scores.computerScore) {
      addText("It's a draw!", "result-tie");
    } else if (scores.humanScore > scores.computerScore) {
      addText("You win the game!", "result-win");
    } else {
      addText("Computer wins the game!", "result-lose");
    }

    // Reset scores so the next click starts a fresh game
    scores.humanScore = 0;
    scores.computerScore = 0;
    updateScoreboard();
  }
}

// Step 6: Play the game
// Attaches click event listeners to the three buttons so each click
// plays one round with the corresponding human choice
function playGame() {
  document.querySelector("#rockBtn").addEventListener("click",     () => playRound("rock"));
  document.querySelector("#paperBtn").addEventListener("click",    () => playRound("paper"));
  document.querySelector("#scissorsBtn").addEventListener("click", () => playRound("scissors"));
}

// Wait for the DOM to fully load before running playGame
document.addEventListener("DOMContentLoaded", playGame);