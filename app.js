const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); 
    
    //  Math.random() gives value of 0 -> 1
    //  * 3 scales it to 0-2.999
    //  Math.floor drops the decimal

    return choices[randomIndex];
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors?");
    const cleaned = input.trim().toLowerCase();

    //  trim() removes spaces
    //  toLowerCase() self-explanatory 

    if(!choices.includes(cleaned)) {
        return null;
    }

       return cleaned;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (humanChoice === "rock" && computerChoice === scissors) {
        console.log("You win! Rock beats scissors.")
        humanScore ++
    }

}
