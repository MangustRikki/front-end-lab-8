let inputs = process.argv.slice(2);
let result = inputs.map((word) => word[0])
    .reduce((res, next) => res + next);
console.log(inputs);