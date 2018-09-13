let plantUrl = "";
let plantListDiv = document.getElementById("plantListDiv");
let shoppingListTxt = document.getElementById("shoppingListTxt");
let shoppingListArr = [];

function getMeSomePlants(url){
    return fetch(url)
    .then(function(response){
        return response.json();
    });
}

function showPlants(category){
    plantListDiv.innerHTML = "<span><div class='pageloader'></div>Loading...</span>";
    if(category !== undefined){
        plantUrl = "http://sukkergris.no/plants/?category=" + category;
    } else{
        plantUrl = "http://sukkergris.no/plants/";
    }
    getMeSomePlants(plantUrl).then(function(data){
        plantListDiv.innerHTML = "";
        plantListDiv.className = "flex-container flex-row";
        for(let i in data){
            let plant = document.createElement("div");
            plant.id = "plant_" + i;
            plant.className = "plantCard";
            plant.innerHTML = 
            `<h3>${data[i].navn}</h3>
            <img src="http://sukkergris.no/plants/images/small/${data[i].bildefil}" alt="${data[i].navn}" style="width:100%">
            <p>${data[i].beskrivelse}</p>
            <p>Price per plant kr ${data[i].pris},-</p><br>
            <button type="button" class="btn-block" onclick="addToShoppingCart('${data[i].id}','${data[i].navn}','${data[i].pris}')">Buy this plant</button>
            `;
            plantListDiv.appendChild(plant);
        }
    });
}
function checkExcistingShoppingCart(){
    if(localStorage.ShoppingList !== undefined){
        shoppingListArr = JSON.parse(localStorage.ShoppingList);
        shoppingListTxt.innerHTML = "(" + shoppingListArr.length + " plant(s) in shopping list)";
    } else{
        shoppingListTxt.innerHTML = "";
    }
}
function addToShoppingCart(plantid,plantname,plantprice){
    shoppingListArr.push({id:plantid,name:plantname,price:plantprice});
    shoppingListTxt.innerHTML = "(" + shoppingListArr.length + " plant(s) in shopping list)";
    localStorage.setItem("ShoppingList", JSON.stringify(shoppingListArr));
}
function clearShoppingCart(){
    localStorage.clear();
    shoppingListArr = [];
    showShoppingCart();
}
function showShoppingCart(){
    checkExcistingShoppingCart();
    let totalSum = 0;
    let output = "";
    plantListDiv.className = "flex-container flex-column";
    if(shoppingListArr.length > 0){
        for(let i in shoppingListArr){
            output += `<div class="shoppingCard">${shoppingListArr[i].name}, kr ${shoppingListArr[i].price},-</div>`;
            totalSum = totalSum + parseInt(shoppingListArr[i].price);
        }
    } else{
        output = "<p>No items added yet...</p>"
    }
    plantListDiv.innerHTML = "<h2>Shopping cart:</h2>";
    plantListDiv.innerHTML += output;
    plantListDiv.innerHTML += "<h3>Total price: kr " + totalSum + ",-</h3>";
    plantListDiv.innerHTML += "<button onclick='clearShoppingCart()' type='button'>Clear shopping cart</button>";

}
//Initial show 
showPlants();
checkExcistingShoppingCart();