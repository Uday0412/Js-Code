let arr = [1, 2, 2, 3, 3, 3, 4];
let freqMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
let mostFrequent = Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
console.log(mostFrequent);
// Output: 3
