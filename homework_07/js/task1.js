let floors = prompt("Enter natural number from 1 to 20", '');

let pyramid = "";
let i = 0;

while (floors <= 0 || floors > 20 || (floors ^ 0) === floors || isNaN(parseFloat(floors))) {
    floors = prompt('Enter natural number from 1 to 20', '');
}

while (i < floors) {
    let brick = "";
    let space = "";
 
    for (let k = 1; k < floors - i; k++) {
        space += "   ";
    }
    for (let j = 0; j < 2 * i +1; j++) {
        brick += '[~]';
    }
    pyramid += space + brick + '\n';
    i++;
}

console.log(pyramid);

