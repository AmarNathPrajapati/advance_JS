// let arr = [ 2,4,5,3,5,3,4];
// let y = arr.filter((x)=>{
//     return x>3;
// });
// console.log(arr);
// console.log(y);
// let z = arr.find(x=>x>3);
// console.log(z);
// let index = arr.findIndex(x=>x>3);
// console.log(index);
// // reapeating string
// console.log("foo"*3)// throws an error
// console.log("foo".repeat(3));

const arr1 = [1,2,3];
const arr2 = [5,6,7,8];
let arr3 = [...arr1,,...arr2];
console.log(arr3);