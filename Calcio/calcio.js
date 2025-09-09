
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//creo l'arrey con le squadre e i vari punteggi a 0
const Squadre = [

    {
        nome: "Raimon",
        punti: 0,
        falli: 0
    },

    {
        nome: "Royal Accademy",
        punti: 0,
        falli: 0
    },

    {
        nome: "Zeus",
        punti: 0,
        falli: 0
    },

    {
        nome: "Gemini Storm",
        punti: 0,
        falli: 0
    },

    {
        nome: "Epsilon",
        punti: 0,
        falli: 0
    },

    {
        nome: "Dark Emperors",
        punti: 0,
        falli: 0
    },

];

//stampa per controllo
console.log(Squadre);

//creo il nuovo array fuori così posso richiarmarlo dopo
let fallieNomi= [];

//faccio un ciclo che generi punti e falli casuali e pushio i nomi e i falli nell'array sopra;

for (let i = 0; i < Squadre.length; i++) {

    Squadre[i].punti = Math.floor(Math.random() * 20);
    Squadre[i].falli = Math.floor(Math.random() * 11);
    fallieNomi.push(Squadre[i].nome + " " + "Falli Subiti " + Squadre[i].falli);  
}

//stampo in console
console.log(fallieNomi);

