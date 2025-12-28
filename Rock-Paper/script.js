const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("score");
let result;
let score = 0;

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    result = "TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "WIN!" : "LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "WIN!" : "LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "WIN!" : "LOSE!";
        break;
    }
  }

  if (result === "WIN!") {
    resultDisplay.style.color = "green";
    score++;
  } else if (result === "LOSE!") {
    resultDisplay.style.color = "darkred";
  } else {
    resultDisplay.style.color = "blue";
  }

  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  scoreDisplay.textContent = `score : ${score}`;

  resultDisplay.textContent = `${result}`;
}
