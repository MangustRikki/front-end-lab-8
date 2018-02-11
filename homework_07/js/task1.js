let floors = prompt("Enter natural number from 1 to 20", '');

let brick = '[~]';
let space = '   ';
let pyramid = "";

while (floors <= 0 || floors > 20 || (floors ^ 0) === floors || isNaN(parseFloat(floors))) {
    floors = prompt('Enter natural number from 1 to 20', '');
}

for (let i = 1; i == floors; i++) {
        for(let k = 0; k < floors; k++) {
            pyramid += space;
        }
} 



