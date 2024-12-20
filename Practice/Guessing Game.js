const Input = prompt(" Enter the Maximum Number ");

const Random_number = Math.floor(Math.Random() * Input) + 1;
let guess = prompt("Guess Number ");

while(true){
  if( guess == "quit"){
    console.log("you quit the Game !");
    break;
  }
  
  if( guess == Random_number){
    console.log(" conguralation your guess is right ");
    break;
  }else{
    guess = prompt("you enter worng number");
    }
}
