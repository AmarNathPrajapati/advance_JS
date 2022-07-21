/**
 * symbol -->  it is a primitive data type used to defined unique keys for same value.
 * it is not a constructor.
 * to convert object into JSON , use json.stringify
 * for in loop ingore the symbol
 */
let sym1 = Symbol('This');
let sym2 = Symbol('This');
console.log(sym1);
console.log(sym2);
// console.log(typeof(sym2));
// console.log(sym1 ==sym2);
// console.log('this'==='this');

let myObj ={
    sym1:"Chandan",
    "age":20
}
myObj[sym2] = "Amar";// here effect of symbol in object
console.log(myObj);
console.log(myObj[sym2]);
console.log(JSON.stringify(myObj));

for(let key in myObj){
    console.log(key);
}