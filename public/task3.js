"use strict";
let plantUrl = "";
let plantListDiv = document.getElementById("plantListDiv");
let shoppingListArr = [];
//localStorage.setItem("ShoppingList", [1,2,4]);
//console.log(localStorage.getItem("ShoppingList"));
//localStorage.clear();

function getMeSomePlants(url){
    return fetch(url)
    .then(function(response){
        return response.json();
    });
}

function showPlants(category){
    plantListDiv.innerHTML = "";
    if(category !== undefined){
        plantUrl = "http://sukkergris.no/plants/?category=" + category;
    } else{
        plantUrl = "http://sukkergris.no/plants/";
    }
    getMeSomePlants(plantUrl).then(function(data){
        for(let i in data){
            let plant = document.createElement("div");
            plant.id = "plant_" + i;
            plant.innerHTML = 
            `<h3>${data[i].navn}</h3>
            <img src="http://sukkergris.no/plants/images/small/${data[i].bildefil}">
            <p>${data[i].beskrivelse}</p>
            <p>Price per plant kr ${data[i].pris},-</p><br>
            <button type="button" onclick="buyPlant(${data[i].id})">Buy this plant</button>
            <hr>
            `;
            plantListDiv.appendChild(plant);
        }
    });
}
function showShoppingCart(){
    let output = "<h2>Shopping cart:</h2>";
    output += "<span class='plantlistbtn'>X</span><div class='plantlist'>Fjonebjørk, kr 129,-</div>";

    plantListDiv.innerHTML = output;
}
function addToShoppingCart(plantid){

}
function removeFromShoppingCart(plantid){

}
//Initial show plants
showPlants();