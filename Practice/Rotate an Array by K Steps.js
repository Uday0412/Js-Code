function rotateArray(arr, k) {
    k %= arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
// Output: [4, 5, 1, 2, 3]