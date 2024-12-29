function chunkArray(arr, size) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
// Output: [[1, 2], [3, 4], [5, 6]]
