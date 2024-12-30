function uniqueElements(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)));
}
console.log(uniqueElements([1, 2, 3], [2, 3, 4]));
// Output: [1, 4]
