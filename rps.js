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

let btn = document.querySelectorAll("button");

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const result = playRound(e.target.innerText, getComputerChoice());
    console.log(result);
  });
});
