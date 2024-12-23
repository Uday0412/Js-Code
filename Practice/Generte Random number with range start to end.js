function Randomnumber(start,end){
    return Math.floor(Math.random()* (end - start +1))  + 1;
}

let startnumber = 23;
let endnumber = 50;

const Answer = Randomnumber(startnumber,endnumber);
console.log(" generate a random number within a range :",Answer);