function value(arr,num){
    return arr.filter(element => element > num);
}

let arr = [12,24,13,45,23];
let userinput = 23;

const answer = value(arr,userinput);
console.log("the greater number than user input : ",answer);