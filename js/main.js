'use strict'

//Getting from the DOM all the buttons and the elements needed for the scripts
const ROCK = "rock";
const SCISSORS = "scissors";
const PAPER = "paper";

const rockBtn = document.getElementById('player-rock');
const scissorsBtn = document.getElementById('player-scissors');
const paperBtn = document.getElementById('player-paper');

const playerMsg = document.getElementById('choice-msg');
const playerImg = document.getElementById('playerresult');
const cpuImg = document.getElementById('cpuresult');
const resultMsg = document.getElementById('result-msg');
const cpuMsg = document.getElementById('main-subtitle');


//Starting a game with the user option captured as a parameter
rockBtn.addEventListener("click", () => {
    playerMsg.innerHTML = "You've chosen "+ROCK;
    startGame(ROCK);
});
scissorsBtn.addEventListener("click", () => {
    playerMsg.innerHTML = "You've chosen "+SCISSORS;
    startGame(SCISSORS);
});
paperBtn.addEventListener("click", () => {
    playerMsg.innerHTML = "You've chosen "+PAPER;
    startGame(PAPER);
});

//Function that is triggered when a user clicks a button. It shows the chosen image, trigger the machine option calculation with a couple of delays for smoothering the frontend view
function startGame(userOption){
    resultMsg.innerHTML = '';
    cpuMsg.innerHTML = "<h3>CPU plays</h3>"
    playerImg.src = "img/"+userOption+".png";
    playerImg.classList.remove("invisible");
    playerImg.classList.add("visible");
    
    const interval = setInterval(() => {
        let machineOption = calcCPU();
        cpuImg.src = 'img/'+machineOption+'.png';
        cpuImg.classList.remove("invisible");
        cpuImg.classList.add("visible");
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        let machineOption = calcCPU();
        cpuImg.src = 'img/'+machineOption+'.png';
        cpuImg.classList.remove("invisible");
        cpuImg.classList.add("visible");
        calcResult(userOption, machineOption);
    }, 2000);
    
}

//Assigning a number on the random math method and converting it to the result of the machine
function calcCPU(){
    let number = Math.floor(Math.random() * 3);
    if (number === 0){
        return ROCK;
    }else if(number === 1){
        return SCISSORS;
    }else{
        return PAPER;
    }
}

//The logic behind the results game. Here I also added a few styles on the returned message
function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        resultMsg.style.color = "#B79A00";
        resultMsg.innerHTML = "You've tied!";
    }else if(userOption === ROCK){
        if(machineOption === PAPER){
            resultMsg.style.color = "red";
            resultMsg.innerHTML = "Sorry... You've lost...";
        }else if(machineOption === SCISSORS){
            resultMsg.style.color = "green";
            resultMsg.innerHTML = "You've won!!";
        }
    }else if(userOption === PAPER){
        if(machineOption === ROCK){
            resultMsg.style.color = "green";
            resultMsg.innerHTML = "You've won!!";
        }else if(machineOption === SCISSORS){
            resultMsg.style.color = "red";
            resultMsg.innerHTML = "Sorry... You've lost...";
        }
    }else if(userOption === SCISSORS){
        if(machineOption === ROCK){
            resultMsg.style.color = "red";
            resultMsg.innerHTML = "Sorry... You've lost...";
        }else if(machineOption === PAPER){
            resultMsg.style.color = "green";
            resultMsg.innerHTML = "You've won!!";
        }        
    }
}