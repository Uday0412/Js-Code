function extractUniqueCharacters(str){
    let uniquechar = "";

    // using loop and check all characters in strings
    
    for(let char of str){
    
        // giving conditions character is not in uniquechar varible 
    
        if(! uniquechar.includes(char)){
    
            // and add char in uniquechar 
    
            uniquechar += char;
    
        }
    
    }

    return uniquechar;
}

let str = "abcdabcdefgggh";
let result = extractUniqueCharacters(str);
console.log(result);