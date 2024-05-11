import { playRound } from "./game.js";

export function buildPage() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  const gameTitle = document.createElement("h1");
  gameTitle.setAttribute("id", "game-title");
  gameTitle.textContent = "Rock Paper Scissors";
  container.appendChild(gameTitle);

  const scoreDisplay = document.createElement("div");
  scoreDisplay.setAttribute("id", "score-display");
  container.appendChild(scoreDisplay);

  const userScore = document.createElement("div");
  userScore.setAttribute("id", "user-score");
  userScore.textContent = "0";
  scoreDisplay.appendChild(userScore);

  const computerScore = document.createElement("div");
  computerScore.setAttribute("id", "computer-score");
  computerScore.textContent = "0";
  scoreDisplay.appendChild(computerScore);

  const gameBoard = document.createElement("div");
  gameBoard.setAttribute("id", "game-board");
  container.appendChild(gameBoard);

  const matchDisplay = document.createElement("div");
  matchDisplay.setAttribute("id", "match-display");
  gameBoard.appendChild(matchDisplay);

  const userChoice = document.createElement("div");
  userChoice.setAttribute("id", "user-choice");
  userChoice.classList.add("choice");
  userChoice.innerHTML = '<i class="fa-solid fa-question"></i>';
  matchDisplay.appendChild(userChoice);

  const computerChoice = document.createElement("div");
  computerChoice.setAttribute("id", "computer-choice");
  computerChoice.classList.add("choice");
  computerChoice.innerHTML = '<i class="fa-solid fa-question"></i>';
  matchDisplay.appendChild(computerChoice);

  const choiceSelection = document.createElement("div");
  choiceSelection.setAttribute("id", "choice-selection");
  gameBoard.appendChild(choiceSelection);

  const rockBtn = document.createElement("div");
  rockBtn.setAttribute("id", "rock");
  rockBtn.classList.add("choice-btn");
  rockBtn.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
  rockBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  choiceSelection.appendChild(rockBtn);

  const paperBtn = document.createElement("div");
  paperBtn.setAttribute("id", "paper");
  paperBtn.classList.add("choice-btn");
  paperBtn.innerHTML = '<i class="fa-regular fa-hand"></i>';
  paperBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  choiceSelection.appendChild(paperBtn);

  const scissorsBtn = document.createElement("div");
  scissorsBtn.setAttribute("id", "scissors");
  scissorsBtn.classList.add("choice-btn");
  scissorsBtn.innerHTML = '<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>';
  scissorsBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  choiceSelection.appendChild(scissorsBtn);

  document.body.appendChild(container);
}
