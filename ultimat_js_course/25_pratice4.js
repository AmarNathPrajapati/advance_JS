//solution 1. '\' is ignored 
console.log("Amar\"".length);

//solution 2.
let str = "Aur bhai kab aaye??";
console.log(str.includes("kab"));
console.log(str.startsWith("A"));;
console.log(str.endsWith("ye??"));

//solution 3.
let lowStr = str.toLowerCase()
console.log(lowStr);

//solution 4.
// let str2 = "please give Rs 1000";
const readline = require("readline-sync");
let str2 = readline.question();
let arr = str2.split(" ");
arr.forEach((value)=>{

    if(parseInt(value)){
        console.log(value);
    }
})
// if(str2.includes("1000")){
//     console.log("1000");
// }

//solution 5. String are immutable
let str3 = "Chandan";
str3[3] = "i";
console.log(str3);