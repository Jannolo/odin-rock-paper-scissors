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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        if (playerChoicePara != null) {
            div.removeChild(playerChoicePara);
            div.removeChild(computerChoicePara);
            div.removeChild(scorePara);
        }

        game(e.target.id);

        //console.log(e.target.id);
    })
});


const div = document.querySelector('div');
let playerChoicePara;
let computerChoicePara;
let scorePara;
let winnerPara;

let score = 0;
let rounds = 0;

function game(playerSelection) {

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

    playerChoicePara = document.createElement('p');
    playerChoicePara.textContent = 'The player chose: ' + playerSelection;
    computerChoicePara = document.createElement('p');
    computerChoicePara.textContent = 'The computer chose: ' + computerSelection;
    scorePara = document.createElement('p');
    scorePara.textContent = 'The score is ' + score;

    div.appendChild(playerChoicePara);
    div.appendChild(computerChoicePara);
    div.appendChild(scorePara);


    rounds++;
    if (rounds == 5) {
        winnerPara = document.createElement('h3');
        if (score > 0) {
            winnerPara.textContent = "The player has won!";
        } else if (score < 0) {
            winnerPara.textContent = 'The computer has won!';
        } else {
            winnerPara.textContent = "It's a draw after 5 games!";
        }
        rounds = 0;
        div.appendChild(winnerPara);
    }
}

