function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const ran = Math.floor(Math.random() * choices.length);
  return choices[ran];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "computer";
  }
}

function game() {
  const score = [0, 0];
  for (let i = 0; i < 5; i++) {
    const result = playRound(
      prompt("What's your choice?").toLowerCase(),
      getComputerChoice()
    );
    if (result === "player") {
      score[0]++;
    } else {
      score[1]++;
    }
  }
  if (score[0] < score[1]) {
    console.log(
      `The score is Player: ${score[0]}, Computer: ${score[1]}. Player has won!`
    );
  } else if (score[0] < score[1]) {
    console.log(
      `The score is Player: ${score[0]}, Computer: ${score[1]}. Computer has won!`
    );
  } else {
    console.log(
      `The score is Player: ${score[0]}, Computer: ${score[1]}. Draw!`
    );
  }
}

game();
