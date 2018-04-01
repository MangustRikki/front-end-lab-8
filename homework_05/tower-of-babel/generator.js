const max = process.argv[2];

let FizzBuzz = function*() {
    let cur = 1,
        value;
    while (cur <= max) {
        if (cur % 15 === 0) {
            value = 'FizzBuzz';
        } else if (cur % 3 === 0) {
            value = 'Fizz';
        } else if (cur % 5 === 0) {
            value = 'Buzz';
        } else { value = cur }
        cur++;
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}