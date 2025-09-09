// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: "Mountain Bike",
        peso: 15
    },
    {
        nome: "Normal Bike",
        peso: 12
    },
    {
        nome: "Mountain Bike v.2",
        peso: 18
    },
    {
        nome: "Race Bike",
        peso: 10
    },
    {
        nome: "Fast Bike",
        peso: 7
    },
    {
        nome: "Beach Bike",
        peso: 19
    },

];
let lightestBike = bici[0];

for( i = 1; i < bici.length; i++){
    const biciArray = bici[i];
    //***BONUS 
    const bike_list = document.getElementById("bike_list");
    let bikeOnScreen = document.createElement("p");
    bikeOnScreen.textContent = bici[i].nome + " ";
    bike_list.appendChild(bikeOnScreen);

    //così facendo stampa il peso di tutte le bici tranne la prima che voglio usare per fare i paragoni.
    if(biciArray.peso < lightestBike.peso){
        lightestBike = biciArray;
    }
}


const result_container = document.getElementById("result_container");
const result = ("La tua bici più veloce è: " + lightestBike.nome + " e pesa "+ lightestBike.peso + " kg!");

let resultOnscreen = document.createElement("div");
resultOnscreen.setAttribute("id", "Risultato");
resultOnscreen.textContent = result;
result_container.appendChild(resultOnscreen);


