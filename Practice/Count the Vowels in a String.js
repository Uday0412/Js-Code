function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("JavaScript")); 
// Output: 3
