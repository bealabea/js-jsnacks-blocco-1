// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


// creo un array vuoto
let numList = [];
// creo una variabile per la somma con valore zero di default
let sum = 0;

// creo un ciclo Do While: chiedo all'utente un numero, aggiungo il numero all'array vuoto,
// sommo i numeri aggiunti dall'utente nell'array e continuo il ciclo fino a che la somma dei numeri dati dall'utente sta sotto 50 (condizione while) 
do {
    let number = parseInt(prompt('inserisci un numero'));
    numList.push(number);
    sum += parseInt(number);
    console.log(number);
    console.log(numList);
} while(sum < 50);

console.log(sum);