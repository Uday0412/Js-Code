let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let intersection = arr1.filter(value => arr2.includes(value));
console.log(intersection);
// Output: [3, 4]
