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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Round ends in a tie!");
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame();