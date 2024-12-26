function secondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 20, 30, 40, 30])); 
// Output: 30
