function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rock\nPaper\nScissors\nPlease pick: ");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return (choice);
            break;
        } else {
            console.log("Please enter a valid choice");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanSelection == computerSelection) {
        console.log("Round ends in a tie!");
    } else if (humanSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper.")
        computerScore++;
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper.")
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);