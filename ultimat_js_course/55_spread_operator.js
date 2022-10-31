// it create object with the help of array.
// basically, it spread the value of array
let arr = [4,5,6,87,9,20];
console.log(...arr);
let obj = {...arr};
console.log(obj);
console.log({...obj});

let arr2 = [1,2,3,4];
function sum(a,b,c){
    return a+b+c;
}
console.log("sum:",sum(...arr2));

//spread operator with object
let new_obj = {
    "Name":"Chandan",
    "age":"20",
    "Role":"Full Stack Developer"
}
console.log(new_obj);
console.log({...new_obj,Name:"Amar Nath"});//keep updation always left side
console.log({Name:"Amar Nath",...new_obj});//no update,because Name will overwrite with object name.
console.log({...obj,Name:"Chandan"});//if not present it added
