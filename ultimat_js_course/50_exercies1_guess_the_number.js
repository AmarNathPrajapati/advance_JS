const readline = require('readline-sync');
let a = 0;
let b = 100;
let actualNumber = Math.ceil(a + (b-a)*Math.random());
console.log("Enter the Number");
let userNumber = parseInt(readline.question());
let count;
for (count = 0; actualNumber!=userNumber; count++) {
    if(userNumber>actualNumber){
        console.log("please Enter Lesser value");
    }else{
        console.log("please Enter Greater value");
    }
    console.log("Enter the Number");
    userNumber = parseInt(readline.question());
}
count = count+1;
let score = 100-count;
console.log("Total attempt: "+ count);
console.log("Your score is: "+ score);
console.log("actualNumber is "+ actualNumber); 