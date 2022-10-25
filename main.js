const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];
const DEFAULT_PLAYER_SELECTION = "rock";

function getComputerSelection() {
  const result =
    ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
  console.log("Computer Selection : ", result);
  return result;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.trim().toLowerCase()) {
    case "rock":
      if (computerSelection === "rock") {
        return "Equality.";
      } else if (computerSelection === "paper") {
        return "You lost, paper beats rock ...";
      } else {
        return "You won ! Rock beats scissors ! :D";
      }
    case "paper":
      if (computerSelection === "rock") {
        return "You won ! Paper beats rock ! :D";
      } else if (computerSelection === "paper") {
        return "Equality.";
      } else {
        return "You lost, scissors beats paper ...";
      }
    case "scissors":
      if (computerSelection === "rock") {
        return "You lost, rock beats scissors ...";
      } else if (computerSelection === "paper") {
        return "You won ! Scissors beats paper ! :D";
      } else {
        return "Equality.";
      }
    default:
      return "An error occured. Please do retry.";
  }
}

function play() {
  let numberOfWins = 0;
  let numberOfLoss = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt();
    const result = playRound(playerSelection, getComputerSelection());
    result.includes("won") ? numberOfWins++ : numberOfLoss++;
    console.log("Round result : ", result);
  }
  numberOfWins > numberOfLoss
    ? console.log(
        `GAME RESULT : Congratulations ! You won ${numberOfWins} out of ${
          numberOfWins + numberOfLoss
        } games`
      )
    : console.log(
        `GAME RESULT : You lost ... you won ${numberOfWins} out of ${
          numberOfWins + numberOfLoss
        } games`
      );
}
