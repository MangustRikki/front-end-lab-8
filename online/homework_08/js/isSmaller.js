function isSmaller(a, b) {
    if (a === b) {
        return false;
    } else {
        return !isBigger(a, b);
    }
}

function isBigger(a, b) {
    return a > b;
}
