let euroRate = 33.46;
let usdRate = 27.12;

let amntEuro = prompt("Enter EURO amnt", "");
let amntUsd = prompt("Enter USD amnt", "");

while (!isNumeric(amntEuro)) {
    amntEuro = prompt("Enter EURO amnt", "");
}

while (!isNumeric(amntUsd)) {
    amntUsd = prompt("Enter USD amnt", "");
}

console.log(`${amntEuro} euros are equal , 52 dollars are equal 1404 UAH, one euro is equal 1.074 dollars`)

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

