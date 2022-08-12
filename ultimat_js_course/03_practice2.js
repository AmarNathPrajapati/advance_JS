const readline = require('readline-sync');
// solution 01
console.log("Enter your age");
let age = parseInt(readline.question())
if(age>10 && age<20){
    // console.log("your age in between 10 and 20");
}else{
    // console.log("your age is not betwen 10 and 20");
}
//solution 02
switch (age) {
    case 10:
        console.log("your are 10 year old");
        break;
    case 20:
        console.log("your are 20 year old");
        break;
    case 30:
        console.log("your are 30 year old");
        break;

    default:
        console.log("pata nahi");
        break;
}
// solution 03
let num = parseInt(readline.question("enter the number\n"));
if(num%2==0 && num%3==0){
    console.log("number is divisible by 2 and 3");
}else{
    console.log("number is not divisible by 2 and 3");
}

// solution 04
let num1 = parseInt(readline.question("enter new the number\n"));
if(num1%2==0 || num1%3==0){
    console.log("number is divisible by 2 or 3");
}else{
    console.log("number is not divisible by 2 or 3");
}
// solution 05
console.log(age>18?"you can drive":"you can not drive");