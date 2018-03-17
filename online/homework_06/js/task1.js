let a = parseFloat(prompt("Введіть першу сторону трикутника", "")),
    b = parseFloat(prompt("Введіть другу сторону трикутника", "")),
    c = parseFloat(prompt("Введіть третю сторону трикутника", "")),
    p, 
    sqr;

if (!isNumeric(a) || !isNumeric(b) || !isNumeric(c)) {
    console.log("Incorrect data");
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data");
} else {
    p = ((a + b + c) / 2);

    var temporary = (p * (p - a) * (p - b) * (p - c));

    if (temporary <= 0) {
      console.log('Incorrect data');
    }
    else {
    sqr = parseFloat(Math.sqrt(temporary).toFixed(2));
      if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
      console.log('Type of triangle is Right triangle and square is ' + sqr);
    } else if ((a == b) == c) {
      console.log('Type of triangle is Equilateral triangle and square is ' + sqr);
    } else if (a == b || a == c || b == c) {
      console.log('Type of triangle is Isosceles triangle and square is ' + sqr);
    } else {
      console.log('Type of triangle is Scalene triangle and square is ' + sqr);
    }
    }
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}