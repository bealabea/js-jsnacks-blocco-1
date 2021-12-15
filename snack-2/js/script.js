// Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente.
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)

// chiedo all'utente un numero
const userNumber = parseInt(prompt('scrivi un numero'));

// con un ciclo for stampo il cubo di ogni numero compreso tra 1 e il numero inserito dall'utente
for (let i = 1; i <= userNumber; i++) {
    console.log(Math.pow(i, 3));    
}

