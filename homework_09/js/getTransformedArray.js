function getTransformedArray(arr, foo) {
    let newArr = [];
    newArr.push(forEach(arr, foo));
    return newArr;
}

let array = [1, 2, 3, 4];

function increase(elem) {
    return elem + 1;
}

console.log(getTransformedArray(array, increase));