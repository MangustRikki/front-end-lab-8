let a = parseFloat(prompt("Введіть першу сторону трикутника", ""));
let b = parseFloat(prompt("Введіть другу сторону трикутника", ""));
let c = parseFloat(prompt("Введіть третю сторону трикутника", ""));
let p = ((a + b + c) / 2);

if (!isNumeric(a) || !isNumeric(b) || !isNumeric(c)) {
    console.log("Incorrect data");
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data");
} else {
    console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}