/**
 *  SET constructor in JavaScript
 *  1. declaration usring set constructor
 *  2. Important set method are(to get method use visual stdio code suggestion)
 *          1.add
 *          2.size
 *          3.delete
 *          4.has
 *  3. Set iteration is done by using for of loop and for each loop .
 *  4. used to remove duplacy in array.
 */
let mySet = new Set();//an empty set
mySet.add('124');
mySet.add('amar');
mySet.add(true);
mySet.add(124);
mySet.add(124);
mySet.delete(true);
// console.log(mySet);
// console.log(mySet.has(true));

// iteration of set
    // for(let item of mySet){
    //     console.log(item);
    // }
    // mySet.forEach((item)=>{
    //     console.log(item);
    //     console.log(typeof(mySet));
    // })
    // Array.from(mySet).forEach((item)=>{
    //     console.log(item);
    //     console.log(typeof(mySet));
    // })
// intializing using constructor 
let mySet2 = new Set ([1,2,3,4,5,6,]);
console.log(mySet2);

let arr = [1,3,4,5,6,6,4,3,5,6,4,4,5,6,6,4,4,56,6,7,7,7,8,6,];
let newArr = new Set(arr);
console.log(newArr);