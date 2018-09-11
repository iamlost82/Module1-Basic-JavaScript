let task2Arr = [
    {pzzl: "AIPZZ", answ: "PIZZA"},
    {pzzl: "KTESA", answ: "STEAK"},
    {pzzl: "ACCEKPU", answ: "CUPCAKE"},
    {pzzl: "HSIGTPTEA", answ: "SPAGHETTI"},
    {pzzl: "ORBIRUT", answ: "BURRITO"}
];

let task2Input = document.getElementById("task2Input");
let task2Btn = document.getElementById("task2Btn");
let task2Txt = document.getElementById("task2Txt");
let task2Result = document.getElementById("task2Result");
let task2Canvas = document.getElementById("task2Canvas");
let task2TimerTxt = document.getElementById("task2TimerTxt");

let task2GuessDuration = 5;//seconds
//Initial index
let task2Index = -1;
let task2Correct = 0;
let task2Failed = 0;

//Validate the answer(check if correct)
function task2ValidateAnswer(){
    if(task2Index < task2Arr.length){
        if(task2Input.value.toUpperCase() === task2Arr[task2Index].answ){
            task2Correct++;
            return true;
        }
        task2Failed++;
        return false;
    }
}

//show the next question
function task2ShowNext(){
    task2Input.value = "";
    if(task2Index < task2Arr.length){
        task2Txt.innerHTML = "Puzzle " + (task2Index+1) + ": " + task2Arr[task2Index].pzzl;
    } else {
        task2Txt.innerHTML = "No more puzzles";
        task2Btn.disabled = true;
        task2Input.disabled = true;
        task2DrawPieChartAndResult();
    }
}
//Update score underway
function task2UpdateScore(){
    task2Result.innerHTML = "Current result: " + task2Correct + " correct answers, " + task2Failed + " wrong answers";
}
//When quiz is complete draw pie chart and show result
function task2DrawPieChartAndResult(){
    task2Canvas.width = 300;
    task2Canvas.height = 300;
    let result = task2Correct / task2Arr.length;
    let ctx = task2Canvas.getContext("2d");
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
    task2Result.innerHTML = "Your result was: " + task2Correct + " out of " + task2Arr.length + " (" + (result*100) + " %)";
}

/* Virker ikke helt ennå

function task2StartTimer(){
    let sec = 5;
    let myTimer = setInterval(function(){
        if(sec<0){
            task2StopTimer();
        }
        sec--;
        console.log("running");
    },1000);
}
function task2CheckTimer(){

}
function task2StopTimer(){
    clearInterval(myTimer);
}

*/

//Handle buttonclick
task2Btn.onclick = function(){
    task2ClickHandler();
}
function task2ClickHandler(){
    //Initial click
    if(task2Index===-1){
        task2Index++;
        task2Btn.innerHTML = "Next puzzle";
        task2Input.disabled = false;
        task2ShowNext();
        //task2StartTimer()
    }
    else{
        task2ValidateAnswer();
        task2UpdateScore();
        task2Index++;
        task2ShowNext();
    }
}