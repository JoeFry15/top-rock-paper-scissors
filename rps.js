function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const ran = Math.floor(Math.random() * choices.length);
  return choices[ran];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "player";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return "computer";
  }
}

const score = [0, 0];
const resultsDiv = document.getElementById("results");
resultsDiv.innerText = `Computer: ${score[0]} Player: ${score[1]}`;

let btns = document.querySelectorAll("button");

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    const result = playRound(e.target.innerText, getComputerChoice());
    if (result === "player") {
      score[1]++;
    } else if (result === "computer") {
      score[0]++;
    }
    // add break out of game
    if (score[0] >= 5) {
      resultsDiv.innerText = "Computer wins! Game over.";
      btns.forEach((button) => {
        button.disabled = true;
      });
    } else if (score[1] >= 5) {
      resultsDiv.innerText = "Player wins! Game over.";
      btns.forEach((button) => {
        button.disabled = true;
      });
    } else {
      resultsDiv.innerText = `Computer: ${score[0]} Player: ${score[1]}`;
    }
  });
});
