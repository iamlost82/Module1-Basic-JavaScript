//Array with 5 elements, index 0-4
let arr = ["PIZZA", "STEAK", "CUPCAKE", "SPAGHETTI", "BURRITO"];
//Setting initial index to 0
let index = 0;
//Define element with id txtOut as txtOut
let txtOut = document.getElementById("txtOut");
//Define element with id btnNxt as btnNxt
let btnNxt = document.getElementById("btnNxt");
//Listen for buttonclick and then run function showNext
btnNxt.onclick = showNext;
//starting a function
function showNext() {
    //If the index is less then the array length, run this
    if (index < arr.length) {
        //in the H1 with id txtOut print from the array the element with
        //with index = index
        txtOut.innerHTML = arr[index];
        //Add one to index
        index++;
    }
    //If the above test fails run this
    else {
        //Print to H1 this message when index is greater than 4
        txtOut.innerHTML = "No more words!";
    }
} 