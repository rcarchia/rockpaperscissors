//console.log("Hello World!")

/* creating a rock paper scissors game

User will input either rock paper scissors 
Computer will generate a move randomly, either rock paper or scissors
Will use math.random to assign a number between 0 and 1; make it so that equal ranges correspond with one of the options
rock beats scissors. paper beats rock. scissors beats paper.
if computer has the winning move computer wins, otherwise player wins, if identical moves draw and reset

*/ 

// randomly generates a computer choice for rock, paper or scissors

window.addEventListener('load', function() {
    playGame();
});

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "Rock";
    } else if (choice <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// prompts use to choose rock, paper or sicssors

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    choice = choice.toLocaleLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}


// plays a game of RPS

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5 && humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result !== "Tie") {
            round++;
            console.log(`${result}! Round ${round} complete`);

        } else {
            console.log("Tie! Let's reset the round.")
        }

        if (round === 5) {
            if (humanScore === 3) {
                console.log("Human Wins Rock, Paper, Scissors!")
                break;
            } else {
                console.log("Computer Wins Rock, Paper, Scissors!")
                break;
            }
        }
    }


    // computes a round of RPS by taking in both player choices and determines who wins a round

    function playRound(humanChoice, computerChoice) {
        console.log(`Computer chooses ${computerChoice} \nHuman chooses ${humanChoice}`)
        if (humanChoice === computerChoice) {
            return "Tie";
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++; 
            return "Computer Wins";
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++; 
            return "Computer Wins";
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++; 
            return "Computer Wins";
        } else {
            humanScore++;
            return "Human Wins";
        } 
    }
    
}

