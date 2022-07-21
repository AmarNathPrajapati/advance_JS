console.log("here are to learn array methods");
let arr = [1,2,"orange","Chandan",true,12.23];
let arr2 = [1,2,3,4];
// note -- array method change the actual array but string method does not change its actual string.
arr.push(10);
arr.unshift("Amar Nath");
arr.pop();
arr.shift();
arr.splice(0,1);// starting index 0 , and delete 1 element.
console.log(Array.isArray(arr));
console.log(arr.length);
arr.reverse();
arr=arr.concat(arr2);// have to store
console.log(arr);