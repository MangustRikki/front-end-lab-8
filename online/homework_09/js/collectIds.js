function collectIds (array) {
    let filteredRate = getFilteredArray(array, elem => elem.rating > 3);
    return getTransformedArray(filteredRate, elem => elem.id);
}