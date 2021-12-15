// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo una variabile con valore 0
let userNumber=0;
// creo un ciclo for per chiedere all'utente 10 numeri
for (let i = 0; i < 10; i++) {
    userNumber += parseInt(prompt('Scrivi un numero'));
    console.log(i);
}
// stampo la somma dei 10 numeri
console.log(userNumber);