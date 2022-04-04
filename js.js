        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');

        let playerScore = 0;
        let computerScore = 0;

        let compChoice;
        let playerChoice;

function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3)
  compChoice = computerOptions[randomNumber];
}
function Dwayne() {
  computerChoice(); {
    switch (computerChoice();)
      case "scissor";
      playerScore++;
      break;
      case "paper";
      computerScore++;
      break;
  }
}
function Paper() {
  computerChoice(); {
    switch (computerChoice();)
      case "rock";
      playerScore++;
      break;
      case "scissor";
      computerScore++;
      break;
  }
}

function Scizor() {
  computerChoice(); {
    switch (computerChoice();)
      case "paper";
      playerScore++;
      break;
      case "rock";
      computerScore++;
      break;
  }
}
