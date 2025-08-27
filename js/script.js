/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km(0.21 € al km)
- va applicato uno sconto del 20 % per i minorenni
- va applicato uno sconto del 40 % per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


// DATI UTENTE
const userAge = parseInt(prompt("Inserisci la tua età"));
const kmNumber = parseInt(prompt("Inserisci i KM da percorrere"));

console.log(userAge);
console.log(kmNumber + " Km");

// BIGLIETTO INTERO
const ticketPrice = (kmNumber * 0.21);

// PREZZO RIDOTTO BAMBINI
if (userAge < 18) {
    const childDiscount = ticketPrice - ((ticketPrice / 100) * 20);
    const price = childDiscount.toFixed(2);

    console.log("il costo del biglietto è" + " €" + price)

    // PREZZO RIDOTTO ANZIANI
} else if (userAge > 65) {
    const oldDiscount = ticketPrice - ((ticketPrice / 100) * 40);
    const price = oldDiscount.toFixed(2);

    console.log("il costo del biglietto è" + " €" + price)

    // PREZZO INTERO
} else {
    const price = ticketPrice.toFixed(2);

    console.log("il costo del biglietto è" + " €" + price)
}





