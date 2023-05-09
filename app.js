let playerScore = 0;
let computerScore = 0
let roundResult = ""

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = "TIE"
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        playerScore = playerScore + 1;
        roundResult = "PLAYER"
    }
    if (
        (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) {
        computerScore = computerScore + 1;
        roundResult = "COMPUTER"
    }
    updateScore(playerSelection)
}

function getRandomOption() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
