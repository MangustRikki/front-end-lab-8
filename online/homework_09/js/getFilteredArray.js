function predicateFunction(num) {
    return num > 3;
}

function getFilteredArray(arr, foo) {
    let filteredArray = [];
    forEach(arr, elem => (predicateFunction(elem)) ? filteredArray.push(elem) : "");
    return filteredArray;
}