function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // true
console.log(isNumeric("123a5")); // false
