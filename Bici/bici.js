// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: "Mountain Bike",
        peso: 15 + "kg"
    },
    {
        nome: "Normal Bike",
        peso: 12 + "kg"
    },
    {
        nome: "Mountain Bike v.2",
        peso: 18 + "kg"
    },
    {
        nome: "Race Bike",
        peso: 10 + "kg"
    },
    {
        nome: "Fast Bike",
        peso: 7 + "kg"
    },
    {
        nome: "Beach Bike",
        peso: 19 + "kg"
    },

];

console.log(bici);

for( i = 0; i < bici.length; i++){
    const biciArray = bici[i];
    console.log(biciArray.peso);
    
    // for(j = 0; j < biciArray.length; j++ ){
    //     console.log(biciArray[j]);
    //     console.log(biciArray[j].peso);
    // }
}