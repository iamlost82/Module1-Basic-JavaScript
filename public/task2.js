let gameArr = [
    {pzzl: "AIPZZ", answ: "PIZZA"},
    {pzzl: "KTESA", answ: "STEAK"},
    {pzzl: "ACCEKPU", answ: "CUPCAKE"},
    {pzzl: "HSIGTPTEA", answ: "SPAGHETTI"},
    {pzzl: "ORBIRUT", answ: "BURRITO"}
];

let gameInput = document.getElementById("gameInput");
let gameBtn = document.getElementById("gameBtn");
let gameTxt = document.getElementById("gameTxt");
let gameResult = document.getElementById("gameResult");
let gameCanvas = document.getElementById("gameCanvas");
let gameTimerTxt = document.getElementById("gameTimerTxt");

let gameGuessDuration = 5;//seconds
//Initial index
let gameIndex = -1;
let gameCorrect = 0;
let gameFailed = 0;

//Validate the answer(check if correct)
function gameValidateAnswer(){
    if(gameIndex < gameArr.length){
        if(gameInput.value.toUpperCase() === gameArr[gameIndex].answ){
            gameCorrect++;
            return true;
        }
        gameFailed++;
        return false;
    }
}

//show the next question
function gameShowNext(){
    gameInput.value = "";
    if(gameIndex < gameArr.length){
        gameTxt.innerHTML = "Puzzle " + (gameIndex+1) + ": " + gameArr[gameIndex].pzzl;
    } else {
        gameTxt.innerHTML = "No more puzzles";
        gameBtn.disabled = true;
        gameInput.disabled = true;
        gameDrawPieChartAndResult();
    }
}
//Update score underway
function gameUpdateScore(){
    gameResult.innerHTML = "Current result: " + gameCorrect + " correct answers, " + gameFailed + " wrong answers";
}
//When quiz is complete draw pie chart and show result
function gameDrawPieChartAndResult(){
    gameCanvas.width = 300;
    gameCanvas.height = 300;
    let result = gameCorrect / gameArr.length;
    let ctx = gameCanvas.getContext("2d");
    //Draw red fill
    ctx.fillStyle = "#960000";
    ctx.strokeStyle = "#000000"
    ctx.arc(150,150,100,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    //Draw green percentage
    ctx.fillStyle = "#009b05";
    ctx.strokeStyle = "#000000"
    ctx.beginPath();
    if(result!==1){
        ctx.moveTo(150,150);
    }
    ctx.arc(150,150,100,0,(2*result)*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //Print out final score
    gameResult.innerHTML = "Your result was: " + gameCorrect + " out of " + gameArr.length + " (" + (result*100) + " %)";
}

/* Virker ikke helt ennå

function gameStartTimer(){
    let sec = 5;
    let myTimer = setInterval(function(){
        if(sec<0){
            gameStopTimer();
        }
        sec--;
        console.log("running");
    },1000);
}
function gameCheckTimer(){

}
function gameStopTimer(){
    clearInterval(myTimer);
}

*/

//Handle buttonclick
gameBtn.onclick = function(){
    gameClickHandler();
}
function gameClickHandler(){
    //Initial click
    if(gameIndex===-1){
        gameIndex++;
        gameBtn.innerHTML = "Next puzzle";
        gameInput.disabled = false;
        gameShowNext();
        //gameStartTimer()
    }
    else{
        gameValidateAnswer();
        gameUpdateScore();
        gameIndex++;
        gameShowNext();
    }
}