const readline = require('readline-sync');
let one = "snake";
let two = "water";
let three = "gun";
console.log("s for "+ one);
console.log("w for "+ two);
console.log("g for "+ three);
let computerChoise =['s','w','g'][Math.ceil(0+(2-0)*Math.random())];
console.log("Computer has chosen");
console.log("Your Turn");
console.log("choose s,w,g");
let userChoise =(readline.question());
let play = true;
function matchGame(userChoise,computerChoise){
    while(play){
        if(computerChoise=='s' && userChoise=='w'){
            console.log("Computer win");
        }
        if(computerChoise=='w' && userChoise=='g'){
            console.log("Computer win");
        }
        if(computerChoise=='g' && userChoise=='s'){
            console.log("Computer win");
        }
        if(computerChoise=='w' && userChoise=='s'){
            console.log("you win");
        }
        if(computerChoise=='g' && userChoise=='w'){
            console.log("you win");
        }
        if(computerChoise=='s' && userChoise=='g'){
            console.log("you win");
        }
        if(computerChoise==userChoise){
            console.log("Draw");
        }
        console.log("Computer: "+ computerChoise);
        console.log("you: "+userChoise);
        console.log("Are you want to quit(y/n)");
        let decision = readline.question();
        if(decision=='y'){
            play= false;
        }else{
            play= true;
        }
        computerChoise =['s','w','g'][Math.ceil(0+(2-0)*Math.random())];
        console.log("Computer has chosen");
        console.log("Your Turn");
        console.log("Enter the number");
        userChoise =(readline.question());
    }
}
matchGame(userChoise,computerChoise);
