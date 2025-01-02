function charFrequency(str) {
    return str.split("").reduce((freq, char) => {
        freq[char] = (freq[char] || 0) + 1;
        return freq;
    }, {});
}
console.log(charFrequency("javascript")); 
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
