function getComputerChoice() {
    let ran = Math.random();
    if (ran < 0.33) {
        return 'rock';
    } else if (ran < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

function play(playerChoice, computerChoice) {
    switch (playerChoice.toLowerCase()) {
        case 'rock':
            if (computerChoice == 'scissors') {
                return 1;
            } else if (computerChoice == 'paper') {
                return -1;
            } else {
                return 0;
            }
        case 'paper':
            if (computerChoice == 'rock') {
                return 1;
            } else if (computerChoice == 'scissors') {
                return -1;
            } else {
                return 0;
            }
        case 'scissors':
            if (computerChoice == 'paper') {
                return 1;
            } else if (computerChoice == 'rock') {
                return -1;
            } else {
                return 0;
            }
    }
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection= prompt("What do you want to choose?");
        let computerSelection = getComputerChoice();
        let res = 0;
        res = play(playerSelection, computerSelection);
        console.log(res);
        switch (res) {
            case 1:
                score += 1;
                break;
            case -1:
                score -= 1;
                break;
        }
        console.log('The player chose: ' + playerSelection);
        console.log('The computer chose: ' + computerSelection)
        console.log('The score is ' + score);
    }

    if (score > 0) {
        console.log("The player has won!");
    } else if (score < 0) {
        console.log('The computer has won!');
    } else {
        console.log("It's a draw after 5 games!");
    }
}

game();