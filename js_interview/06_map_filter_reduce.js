let arr = [1,2,3,4,5];
/**
 * These are high order functions (foreach)
 * polyfill
 * ham to normal for loop se bhi ho jayega, but high order function make the code impresive and short.
 */
/*** Map *****/
let mapArr = arr.map((item)=>{
    //operation
    let sum = item+10;
    let ans = sum*2;
    return ans;
})
console.log("mapArr: ", mapArr);

let mapArr2 = arr.map((item)=>{
    //operation
    return (item>3)
})
console.log("mapArr2: ",mapArr2);



/***  Filter ***/
let filterArr = arr.filter((item)=>{
    //operation
    return (item>3)
})
console.log("filterArr: ",filterArr);


/**** Reduce ****/
let reduceAns = arr.reduce((a,b)=>{
    return a*b;
})
console.log(reduceAns);

/********* Sort **********/
let sortArr = arr.sort((a,b)=>{
    if(a<b){
        return 1;
    }else{
        return -1;
    }
})
console.log(`Sorted Array: ${sortArr}`);
