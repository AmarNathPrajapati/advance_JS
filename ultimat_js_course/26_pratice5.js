const readline = require('readline-sync');


//solution 1.
// let num = parseInt(readline.question());
// let arr = [1,2,3,4,5];
// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i] + num;
// }
// console.log(arr);

//solution 1(iii).
// let num = parseInt(readline.question());
// let arr = [1,2,3,4,5];
// arr.push(num);
// console.log(arr);

//solution 1(iv).
let num;
let arr = [1,2,3,4,5];
while(true){
    num = parseInt(readline.question());
    if(num==0){
        break;
    }
    arr.push(num);
}
console.log(arr);


//solution 1(ii).
// let arr2 = []
// console.log("Enter the size of array");
// arr2.length = parseInt(readline.question());
// let sum = 0;
// for(let i = 0; i<arr2.length; i++){
//     console.log("Enter the value in the array");
//     arr2[i] = parseInt(readline.question());
//     //solution 2
//     if(arr2[i]==0){
//         break;
//     }
//     sum = sum + arr2[i];
// }
// console.log("Summation is "+sum);

// solution 3.
// let arr3 = [10,13,30,43,50,60];
// let newArr3 = arr3.filter((value)=>{
//     if(value%10==0){
//         return value;
//     }
// })
// console.log(newArr3);

// solution 4.
// let newArr4 = arr3.map((value)=>{
//     return value*value;
// })
// console.log(newArr4);

//solution 5.
// let num  = 5;
// let fact = 1;
// for(let i = 1;i<= 5; i++){
//     fact =fact*i
// }
// console.log(fact);

//solution 5(ii)
// let arr5 = [1,2,3,4,5];
// let n = arr5.reduce((a,b)=>{
//     return a*b;
// })
// console.log(n);;



