function arrayDifference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}
console.log(arrayDifference([1, 2, 3], [2, 4, 6]));
// Output: [1, 3]
