/**
 *   there are two special loops in JS 
 *      1. for in loop
 *              useful in only case of object.
 *      2. for of loop
 *              useful any iterable datatypes and not useful in case of object.
 * 
 * */

let obj ={
    'name':"Chandan",
    'age' : 20,
    "programmer" : true,
    "language":"javaScript"
}
let people =["amar","chandan","golu","lucky","steve","stork","natasha","hulk"];
let str = "This is string, its iteration done by for of loop";

// for(let key in obj){
//     // console.log(key,typeof(key));
//     // console.log([key],typeof([key]));
//     // console.log(`The value of ${key} is `,obj[key]);
// }
/*
for(let key in people){
    console.log(key);
}                                       no use of for in loop in string and array.............
for(let key in str){
    console.log(key);
}*/

/******************for of loop *************/

for(let char of str){// iteration of string
    console.log(char);
}
for(let name of people){
    console.log(name);
}