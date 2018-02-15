function reverseNumber(num) {
    return Math.abs(num).toString().split("").reverse().join("") * Math.sign(num);
}
