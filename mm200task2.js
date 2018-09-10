let task2Arr = [
    {pzzl: "AIPZZ", answ: "PIZZA"},
    {pzzl: "KTESA", answ: "PIZZA"},
    {pzzl: "ACCEKPU", answ: "PIZZA"},
    {pzzl: "HSIGTPTEA", answ: "PIZZA"},
    {pzzl: "ORBIRUT", answ: "PIZZA"}
];
let task2Input = document.getElementById("task2Input");
let task2Btn = document.getElementById("task2Btn");
let task2ValDiv = document.getElementById("task2ValDiv");
let task2Txt = document.getElementById("task2Txt");
let task2Result = document.getElementById("task2Result");
let task2Index = 0;
let task2Correct = 0;
let task2Failed = 0;
//Validate that something is written in input field
function task2ValidateInput(){
    task2ValDiv.innerHTML = "";
    task2ValDiv.classList.remove("val_error");
    if(task2Input.value !== ""){
        return true;
    }
    else{
        task2ValDiv.innerHTML = "You have to write something...";
        task2ValDiv.classList.add("val_error");
        return false;
    }
}
//Validate the answer
function task2ValidateAnswer(){
    if(task2Input.value.toUpperCase() === task2Arr[task2Index].answ){
        return true;
    }
    return false;
}
//show the next question
function task2ShowNext(){
    task2Txt.innerHTML = "Puzzle " + (task2Index+1) + ": " + task2Arr[task2Index].pzzl;
}
function updateScore(){
    task2Result.innerHTML = "Current result: " + task2Correct + " correct answers, " + task2Failed + " wrong answers";
}
//initial display of 1.st task
task2ShowNext();
//Handle buttonclick
task2Btn.onclick = function(){
    if(task2Index < task2Arr.length){
        if(task2ValidateInput()===true && task2ValidateAnswer()===true){
            task2Correct++;
            task2Index++;
            task2Input.value = "";
            task2ShowNext();
            console.log("corr" + task2Index);
        }
        else{
            task2Failed++;
            task2Index++;
            task2Input.value = "";
            task2ShowNext();
            console.log("fail" + task2Index);
        }
    }
    else{
        task2Txt.innerHTML = "No more puzzles!";
        task2Btn.disabled = true;
        task2Input.disabled = true;
        task2Input.value = "";
    }
    updateScore();
}