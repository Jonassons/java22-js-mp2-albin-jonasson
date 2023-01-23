let choices = document.querySelectorAll(".choice");
let restart = document.querySelector("#restart");
let result = document.querySelector("#result");
let scores = document.querySelector("#scores");
let name = document.querySelector("#name");
let computerScore = 0;
let playerScore = 0;

choices.forEach(choice => {
    choice.addEventListener("click", function () {
        let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        let userChoice = this.id;
        let compare = function (choice1, choice2) {
            if (choice1 === choice2) {
                return "The result is a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    playerScore++;
                    return "rock wins";
                } else {
                    computerScore++;
                    return "paper wins";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    playerScore++;
                    return "paper wins";
                } else {
                    if (choice2 === "scissors") {
                        computerScore++;
                        return "scissors wins";
                    }
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    computerScore++;
                    return "rock wins";
                } else {
                    if (choice2 === "paper") {
                        playerScore++;
                        return "scissors wins";
                    }
                }
            }
        };

        let winner = compare(userChoice, computerChoice);
        result.innerHTML = `You chose ${userChoice}, the computer chose ${computerChoice}. ${winner}`;
        scores.innerHTML = `${name.value} : ${playerScore} - Computer : ${computerScore}`;
        if (playerScore === 3) {
            result.innerHTML = `${name.value} wins!`;
        } else if (computerScore === 3) {
            result.innerHTML = `Computer wins!`;
        }
    });
});

restart.addEventListener("click", function () {
    location.reload();
});