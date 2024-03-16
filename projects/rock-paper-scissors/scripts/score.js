function setUserScore(userScore) {
  document.getElementById("user-score").textContent = `You: ${userScore}`;
}

function setComputerScore(computerScore) {
  document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
}

export { setUserScore, setComputerScore };
