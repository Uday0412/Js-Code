function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }
    return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 6));
// Output: [[4, 2], [5, 1]]
