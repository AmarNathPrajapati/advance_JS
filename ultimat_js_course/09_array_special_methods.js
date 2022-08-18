//array methoods
/**
 * delete is a operator like typeof
 * can't modify original array
 * slice
 * concat
 * modify original array
 * sort -
 * sort(compare)
 * reverse
 * splice
 */
let arr = [41,21,4,51,6];
// delete arr[0];
// console.log(arr); 
// console.log(arr.length); 
let newArr = [34,42,23,54,43];
let newArr2 = [12,32,23,54,34];
let concatedArr=arr.concat(newArr,newArr2);
// console.log(concatedArr);
// arr.sort()
const compare = (a,b) =>{
    return a-b;// for ascending, b-a for descending
}
// arr.sort(compare)
// arr.reverse()
// console.log(arr.splice(1,4,101,102,103,104,105));
// console.log(arr.slice(3));
console.log(arr.slice(1,2));
console.log(arr);
