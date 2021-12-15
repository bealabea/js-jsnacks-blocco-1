// Stampa le potenze di 2 fino a 1000.

// creo due variabili, una per l'incremento della potenza e una per il risultato, a cui attribuisco valore 0
let i = 0;
let result = 0;

// creo un ciclo While, finchè il risultato sta sotto 1000 il ciclo continua. Quindi modifico la variabile del risultato a seconda dell'incremento della potenza e stampo i risultati.
while (result <= 1000) {
   result = Math.pow(2, i);
   i++;
   console.log(result);
}