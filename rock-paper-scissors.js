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
        let choice = prompt("1. rock\n2. paper\n3. scissors\nPlease pick: ");
        if (choice == 1) {
            return ("rock");
            break;
        } else if (choice == 2) {
            return ("paper");
            break;
        } else if (choice == 3) {
            return ("scissors");
            break;
        } else {
            console.log("Please enter a number 1-3.");
        }
    }
}
