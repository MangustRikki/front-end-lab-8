let floors = prompt("Enter natural number from 1 to 20", '');
let brick = "";
let space = "";
let pyramid = "";
let i = 0;

if (floors <= 0 || floors > 20 || (floors ^ 0) === floors || isNaN(parseFloat(floors))) {
    
    console.error('Incorrect!');
}

else {

while (i < floors) {
    brick = "";
    space = "";
 
    space = "   ".repeat(floors - i - 1);
    brick = "[~]".repeat(2 * i + 1);

    pyramid += space + brick + '\n';
    i++;
}

console.log(pyramid);

}