const readline = require("readline-sync");
// solution 01
let obj = {
  harry: 98,
  rohan: 70,
  aakash: 60,
};
console.log(Object.keys(obj)); //covert all keys in the array
// using for loop
for (let i = 0; i < Object.keys(obj).length; i++) {
  // console.log("The marks of " +Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]]);
}
//soluotion 02
// usng for in loop
for (key in obj) {
  // console.log("The marks of "+ key +" are " + obj[key]);
}
//solution 03
let correctNum = 10;
while (true) {
  let userNum = readline.question("Enter the correct number\n");
  if (correctNum == userNum) {
    console.log("you entered the correct number");
    break;
  } else {
    console.log("try Again");
  }
}
//solution 04
const mean = (a,b,c,d,e) =>{
    return((a+b+c+d+e)/5);
}
console.log(mean(1,2,3,4,5));