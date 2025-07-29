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

// testGetComputerChoice();
let player_choice = getHumanChoice();
console.log(player_choice);