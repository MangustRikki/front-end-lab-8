function getTransformedArray(arr, foo) {
    const newArr = [];
    forEach(arr, elem => newArr.push(increase(elem)));
    return newArr;
}

function increase(elem) {
   return elem += 1;
}
