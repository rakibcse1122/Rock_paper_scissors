let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const indx = Math.floor(Math.random() * 3);
    return options[indx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
}
const gameResult = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        console.log("You're Won!!!!");
        // userScore++;
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScr.innerText = ++userScore;
    }
    else{
        console.log("You're lost , try again!");
        // compScore++;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        compScr.innerText = ++compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);
    
    if(userChoice === compChoice){
        //dar game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        gameResult(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    })
});