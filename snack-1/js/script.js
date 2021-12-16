// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo una variabile con valore 0
let sum=0;
// creo un ciclo for per chiedere all'utente 10 numeri
for (let i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt('Scrivi un numero'));
    sum += userNumber;
    console.log(userNumber);
}
// stampo la somma dei 10 numeri
console.log(sum);