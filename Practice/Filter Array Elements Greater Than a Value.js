function filterGreaterThan(arr, value) {
    return arr.filter(num => num > value);
}
console.log(filterGreaterThan([10, 20, 30, 5, 15], 15)); 
// Output: [20, 30]
