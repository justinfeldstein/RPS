 let playerScore = 0;
 let computerScore = 0;
 let playerChoice = "";
 let computerChoice = "";
 let pCount = document.getElementById('p-count');
 let cCount = document.getElementById('c-count');
 let result = document.getElementById('result');

function computerSelect() {
 let choice = Math.floor(Math.random() * 3);
 switch (choice) {
   case 0:
     computerChoice = "paper";
     break;
   case 1:
     computerChoice = "rock";
     break;
   case 2:
     computerChoice = "scissors";
     break;
 }
}

function Dwayne() {
 computerSelect();
 switch (computerChoice) {
   case "paper":
   result.innerHTML = "Loser :(";
     computerScore++;
     break;
   case "rock":
   result.innerHTML = "Tie";
     break;
   case "scissors":
   result.innerHTML = "Winner!!";
     playerScore++;
     break;
 }
 pCount.innerHTML = playerScore;
 cCount.innerHTML = computerScore;
}

function Konan() {
 computerSelect();
 switch (computerChoice) {
   case "scissors":
     computerScore++;
      result.innerHTML = "Loser :(";
     break;
   case "paper":
    result.innerHTML = "Tie";
     break;
   case "rock":
     playerScore++;
      result.innerHTML = "Winner!!";
     break;
 }
 pCount.innerHTML = playerScore;
 cCount.innerHTML = computerScore;
}

function Scizor() {
 computerSelect();
 switch (computerChoice) {
   case "rock":
     computerScore++;
      result.innerHTML = "Loser :(";
     break;
   case "scissors":
    result.innerHTML = "Tie";
     break;
   case "paper":
     playerScore++;
      result.innerHTML = "Winner!!";
     break;
 }
 pCount.innerHTML = playerScore;
 cCount.innerHTML = computerScore;
}

function reset() {
 computerScore = 0;
 playerScore = 0;
 pCount.innerHTML = playerScore;
 cCount.innerHTML = computerScore;
 result.innerHTML = "Results"
}
