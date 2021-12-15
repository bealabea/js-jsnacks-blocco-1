// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

// chiedo il numero di 4 cifre all'utente con prompt
const userNum = (prompt('scrivi un numero di 4 cifre e lo sommerò'));
// creo una variabile della somma a cui attribuisco un valore di default
let sum = 0;
// creo un ciclo for in cui dico di sommare tutti gli elementi della stringa dell'utente che trasformo in numero con il parseInt.
for(i = 0; i < userNum.length; i++){
    sum += parseInt(userNum[i]);
}
// stampo il totale
console.log(sum);
