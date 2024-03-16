/** @param {MouseEvent} event */
export function chooseWeapon(event) {
  document.querySelectorAll(".choice-btn").forEach((button) => {
    button.classList.remove("active");
  });

  event.target.parentElement.classList.add("active");
}

function unchooseWeapon() {
  document.querySelectorAll(".choice-btn").forEach((button) => {
    button.classList.remove("active");
  });
}

export function playRound() {
  const userChoice = userPlay();
  const computerChoice = computerPlay();

  const result = getResult(userChoice, computerChoice);

  if (!result) {
    return;
  }

  unrevealWeapon();
  shakeBox();

  setTimeout(() => {
    revealWeapon(userChoice, computerChoice);

    if (result == 'win') {
      setUserScore(getUserScore() + 1);
    } else if (result == 'lose') {
      setComputerScore(getComputerScore() + 1);
    }

    unchooseWeapon();
  }, 500);
}

function getResult(userChoice, computerChoice) {
  if (!userChoice) {
    return;
  }

  if (userChoice === computerChoice) {
    return "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

function userPlay() {
  return document.querySelector(".active").id;
}

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getUserScore() {
  return parseInt(document.getElementById("user-score").textContent);
}

function setUserScore(userScore) {
  document.getElementById("user-score").textContent = userScore;
}

function getComputerScore() {
  return parseInt(document.getElementById("computer-score").textContent);
}

function setComputerScore(computerScore) {
  document.getElementById("computer-score").textContent = computerScore;
}

function shakeBox() {
  document.querySelectorAll(".choice i").forEach((elm) => elm.classList.add("shake"));
  setTimeout(() => {
    document.querySelectorAll(".choice i").forEach((button) => button.classList.remove("shake"));
  }, 500);
}

function revealWeapon(userChoice, computerChoice) {
  document.getElementById("user-choice").innerHTML = `<i class="fa-solid ${userChoice == "rock" ? "fa-hand-back-fist" : userChoice == "paper" ? "fa-hand" : "fa-hand-scissors fa-rotate-90"}"></i>`;
  document.getElementById("computer-choice").innerHTML = `<i class="fa-solid ${computerChoice == "rock" ? "fa-hand-back-fist" : computerChoice == "paper" ? "fa-hand" : "fa-hand-scissors fa-rotate-90"}"></i>`;
}

function unrevealWeapon() {
  document.getElementById("user-choice").innerHTML = '<i class="fa-solid fa-question"></i>';
  document.getElementById("computer-choice").innerHTML = '<i class="fa-solid fa-question"></i>';
}
