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





