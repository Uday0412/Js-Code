function findSubsets(arr) {
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
}
console.log(findSubsets([1, 2])); 
// Output: [[], [1], [2], [1, 2]]
