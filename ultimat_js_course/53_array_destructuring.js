let arr = [4,5,6];
// let [a,b,c]= [4,5,6];
// // or
let [a,b,c] = arr;
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);

let arr1 = [1,2,3,4,5,6,7]
let [a1,b1,c1,...d1] = arr1;
console.log("a1: ",a1);
console.log("b1: ",b1);
console.log("c1: ",c1);
console.log("d1: ",d1);

let arr2 = [1,2,3,4,5,6,7]
let [a2,,b2,,...d2] = arr2;
console.log("a2: ",a2);
console.log("b2: ",b2);
// console.log("c2: ",c2);
console.log("d2: ",d2);

let arr3 = [1,2,3,4,5,6,7]
let [a3,,,...d3] = arr3;//start value of d3 from 4
console.log("a3: ",a3);
// console.log("b3: ",b3);
// console.log("c3: ",c3);

console.log("d3: ",d3);
let arr4 = [1,2,3,4,5,6,7]
let [a4,b4,c4,d4] = arr4;//rest are ignored
console.log("a4: ",a4);
console.log("b4: ",b4);
console.log("c4: ",c4);
console.log("d4: ",d4);

