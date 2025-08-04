function getComputerChoice(){
    // Returns "rock", "paper" or "scissors" randomly.
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    };
}

function getHumanChoice() {
    // Requires: user to enter "rock", "paper" or "scissors" when prompted
    // Returns: the user input.
    return prompt("Please make your play: rock, paper or scissors?");
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        // Requires: 
        //    humanChoice: string "rock", "paper" or "scissors" (case insensitive)
        //    computerChoice: string "rock", "paper" or "scissors"   
        // Effect:
        //    increments globals humanScore or computerScore depending on who wins
        //    adds text showing round result and running score to the results panel.
        //    if a player reached 5 points, add game over message to the results panel.

        let resultLine = document.createElement("p");
        let resultRunningScore = document.createElement("p");

        if (humanChoice.toLowerCase() === "rock" ){
            if (computerChoice === "rock"){
                resultLine.textContent = "Tie. Both played " + computerChoice;
            } else if (computerChoice === "paper"){
                resultLine.textContent ="You lose! " + computerChoice + " beats " + humanChoice.toLowerCase();
                computerScore++;
            } else {
                resultLine.textContent = "You win! " + humanChoice.toLowerCase() + " beats " + computerChoice;
                humanScore++;
            }
        } else if (humanChoice.toLowerCase() === "paper"){
            if (computerChoice === "paper"){
                resultLine.textContent = "Tie. Both played " + computerChoice;
            } else if (computerChoice === "scissors"){
                resultLine.textContent = "You lose! " + computerChoice + " beat " + humanChoice.toLowerCase();
                computerScore++;
            } else {
                resultLine.textContent = "You win! " + humanChoice.toLowerCase() + " beats " + computerChoice;
                humanScore++;
            }
        } else { // "scissors"
            if (computerChoice === "scissors"){
                resultLine.textContent = "Tie. Both played " + computerChoice;
            } else if (computerChoice === "rock"){
                resultLine.textContent = "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase();
                computerScore++;
            } else {
                resultLine.textContent = "You win! " + humanChoice.toLowerCase() + " beat " + computerChoice;
                humanScore++;
            }
        }
        
        resultRunningScore.textContent = `Your score: ${humanScore}, computer score: ${computerScore}`;

        resultsDiv.appendChild(resultLine);
        resultsDiv.appendChild(resultRunningScore);

        let gameOverMessage = document.createElement("p");
        if (Math.max(humanScore, computerScore) === 5){
            if (humanScore > computerScore){
                gameOverMessage.textContent = "You win the game!";
            } else if (humanScore < computerScore){
                gameOverMessage.textContent = "You lose the game!";
            } else {
                gameOverMessage.textContent = "You tied the game!";
            }
        }
        resultsDiv.appendChild(gameOverMessage);
    }

    let humanScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector("#scissorsButton");
    const resultsDiv = document.querySelector("#resultsDiv");

    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    });
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    });
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    });
}
// MAIN
playGame();

function testGetComputerChoice(n = 100000){
    // Requires: 
    //      n: number of tests to run, default: 100000
    // Effect: 
    //      logs into the console the number of rocks, papers and scissors returned by getComputerChoice
    let rock_count = 0;
    let paper_count = 0;
    let scissors_count = 0;
    for (let i = 0; i < n; i++){
        let choice = getComputerChoice(); 
        switch(choice){
            case "rock": 
                rock_count++;
                break;
            case "paper": 
                paper_count++;
                break;
            case "scissors": 
                scissors_count++;
                break;
        }
    }
    console.log(rock_count);
    console.log(paper_count);
    console.log(scissors_count);
}