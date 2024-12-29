function isSorted(arr) {
    return arr.every((val, i) => i === 0 || val >= arr[i - 1]);
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([5, 3, 2, 1])); // false
