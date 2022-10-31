//hoisting me declare hota hua seems hota hai,but initialise nahi hota hai...

console.log(a);// undefined,it seems it declare on the top
var a = 10;
greet();// it seems, function declare on the top
function greet(){
    console.log("Good Morning");
}
//JS interpreter does different behaviour with (let and const) and var.

//console.log(b);//erro
//same happen with const variables
let b = 10;
// Note: funtion and class expression will not hoisted.(expression declare with = sign)
// func(); error
let func = () =>{
    console.log("I will not hoisted on the top");
}
func();



