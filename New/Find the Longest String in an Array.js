function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}
console.log(longestString(["apple", "banana", "cherry"]));
// Output: "banana"
