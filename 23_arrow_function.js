// creating a general function
function amar(){
    console.log("My name is Amar Nath ");
}
amar();
//creating a general function in other way
let chandan = function(){
    console.log("My name is Chandan");
}
chandan();
//creating a function using arrow function
let greet = () =>{
    return "Good Morning";
}
console.log(greet());

let greet1 = () =>"Good Morning"; // one line is always return
console.log(greet1());
//with parameters
let greet2 = name =>"Good Morning "+ name;
console.log(greet2("Amar"));
//return object
let greet3 = () => ({name:"Amar Nath"})
console.log(greet3());
//with multiple parameter
let greet4 = (name,age) =>{
    console.log(`My name is ${name} and I am ${age} years old`);
}
greet4("Amar Nath",19);