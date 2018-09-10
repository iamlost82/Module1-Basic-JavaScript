//Array with 5 elements, index 0-4
let task1arr = ["PIZZA", "STEAK", "CUPCAKE", "SPAGHETTI", "BURRITO"];
//Setting initial index to 0
let task1index = 0;
//Define element with id task1txtOut as task1txtOut
let task1txtOut = document.getElementById("task1txtOut");
//Define element with id task1btnNxt as task1btnNxt
let task1btnNxt = document.getElementById("task1btnNxt");
//Listen for buttonclick and then run function task1showNext
task1btnNxt.onclick = task1showNext;
//starting a function
function task1showNext() {
    //If the index is less then the array length, run this
    if (task1index < task1arr.length) {
        //in the H1 with id task1txtOut print from the array the element with
        //with index = task1index
        task1txtOut.innerHTML = task1arr[task1index];
        //Add one to task1index
        task1index++;
    }
    //If the above test fails run this
    else {
        //Print to H1 this message when task1index is greater than 4
        task1txtOut.innerHTML = "No more words!";
    }
} 