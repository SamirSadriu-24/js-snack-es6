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

console.log(bici);
let lightestNike = [];

for( i = 0; i < bici.length; i++){
    const biciArray = bici[i];
    console.log(biciArray.peso);

    // for(j = 0; j < biciArray.length; j++ ){
    //     console.log(biciArray[j]);
    //     console.log(biciArray[j].peso);
    // }
}