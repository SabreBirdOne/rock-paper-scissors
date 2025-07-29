// console.log("Hello World");

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

function playRound(humanChoice, computerChoice) {
  // Requires: 
  //    humanChoice: string "rock", "paper" or "scissors" (case insensitive)
  //    computerChoice: string "rock", "paper" or "scissors"   
  // Effect:
  //    logs into the console the winner of the round
  //    increments globals humanScore or computerScore depending on who wins.
  
  if (humanChoice.toLowerCase() === "rock" ){
    if (computerChoice === "rock"){
        console.log("Tie. Both played " + computerChoice);
    } else if (computerChoice === "paper"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice.toLowerCase());
        computerScore++;
    } else {
        console.log("You win! " + humanChoice.toLowerCase() + " beats " + computerChoice);
        humanScore++;
    }
  } else if (humanChoice.toLowerCase() === "paper"){
    if (computerChoice === "paper"){
        console.log("Tie. Both played " + computerChoice);
    } else if (computerChoice === "scissors"){
        console.log("You lose! " + computerChoice + " beat " + humanChoice.toLowerCase());
        computerScore++;
    } else {
        console.log("You win! " + humanChoice.toLowerCase() + " beats " + computerChoice);
        humanScore++;
    }
  } else { // "scissors"
    if (computerChoice === "scissors"){
        console.log("Tie. Both played " + computerChoice);
    } else if (computerChoice === "rock"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice.toLowerCase());
        computerScore++;
    } else {
        console.log("You win! " + humanChoice.toLowerCase() + " beat " + computerChoice);
        humanScore++;
    }
  }
}

// MAIN
// testGetComputerChoice();
// let player_choice = getHumanChoice();
// console.log(player_choice);

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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