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

console.log(`${amntEuro} euros are equal ${(euroRate * amntEuro).toFixed(2)} UAH, ${amntUsd} dollars are equal ${(usdRate * amntUsd).toFixed(2)} UAH, one euro is equal ${(euroRate/usdRate).toFixed(4)} dollars`);

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}