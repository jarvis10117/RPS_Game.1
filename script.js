function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) return "Rock";
    if (choice === 1) return "Paper";
    return "Scissors";
}

function getHumanChoice() {
    let input = prompt("Choose: r = Rock, p = Paper, s = Scissors").toLowerCase();

    if (input === "r") return "Rock";
    if (input === "p") return "Paper";
    if (input === "s") return "Scissors";

    alert("Invalid input! Try again.");
    return getHumanChoice(); // retry
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Draw");
            draw++;
        }
        else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Total rounds played: 5");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Draws: ${draw}`);
}

playGame();

