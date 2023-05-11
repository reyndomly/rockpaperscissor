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

const playerScoreParam = document.getElementById("playerScore")
const computerScoreParam = document.getElementById("computerScore")
const infoScore = document.getElementById("infoScore")
const playerSign = document.getElementById("playerSign")
const computerSign = document.getElementById("computerSign")
const btnRock = document.getElementById("btnRock")
const btnPaper = document.getElementById("btnPaper")
const btnScissors = document.getElementById("btnScissors")

btnRock.addEventListener('click', () => handleClick('ROCK'))
btnPaper.addEventListener('click', () => handleClick('PAPER'))
btnScissors.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
  if (isGameOver()) {
    alert("Game Over");
    restartGame();
    return
  }

  const computerSelection = getRandomOption()

  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'ROCK':
      playerSign.textContent = '✊'
      break
    case 'PAPER':
      playerSign.textContent = '✋'
      break
    case 'SCISSORS':
      playerSign.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'ROCK':
      computerSign.textContent = '✊'
      break
    case 'PAPER':
      computerSign.textContent = '✋'
      break
    case 'SCISSORS':
      computerSign.textContent = '✌'
      break
  }
}

function updateScore() {
  if (roundResult === 'TIE') {
    infoScore.textContent = "It's a tie!"
  } else if (roundResult === 'PLAYER') {
    infoScore.textContent = 'You won!'
  } else if (roundResult === 'COMPUTER') {
    infoScore.textContent = 'You lost!'
  }

  playerScoreParam.textContent = `${playerScore}`
  computerScoreParam.textContent = `${computerScore}`
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  infoScore.textContent = 'score'
  playerScoreParam.textContent = '0'
  computerScoreParam.textContent = '0'
  playerSign.textContent = '🎲'
  computerSign.textContent = '🎲'
}