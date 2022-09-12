// map method
let arr = [12,43,23,54,34];
//like forEach
arr.map((value)=>{
    // console.log(value);
})
//actual use of map
let a = arr.map((value,index,array)=>{
    // console.log(value,index,array);
    return value+1;
})
//filter method
let b = arr.filter((a)=>{
    return a>25;
})
// console.log(b);
//reduce method
let arr2 = [1,2,4,5];
let c = arr2.reduce((a,b)=>{
    return (a*b)
})
console.log(c);