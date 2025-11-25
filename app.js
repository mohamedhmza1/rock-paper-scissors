const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); 
    
    //  Math.random() gives value of 0 -> 1
    //  * 3 scales it to 0-2.999
    //  Math.floor drops the decimal

    return choices[randomIndex];
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors?");
    const cleaned = input.trim().toLowerCase();             // trim() removes spaces


    if(!choices.includes(cleaned)) {
        return null;
    }

       return cleaned;
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock" ) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound();
        console.log(`Human: ${humanScore} - Computer: ${computerScore}. `)

    }

}

playGame()