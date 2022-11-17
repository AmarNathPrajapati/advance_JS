//very simple method in this method both query is fired after two second hence you have to use concept of asyn await
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);
// setTimeout(() => {
//     console.log("World");
// }, 2000);

/* solution 1
let funp = async(text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(text)
        }, 2000);
    })
}

(async()=>{
    console.log(await funp("Hello"));
    console.log(await funp("world"));
})();
*/

/* solution 2
let arr = [1,2,3];
const avg = (a,b,c) =>{
    console.log((a+b+c)/3);
}
avg(...arr);

const funAvg = (arr,size) =>{
    let sum = 0;
    arr.forEach(a => {
        sum = sum + a;
    });
    console.log(sum/size);
}
funAvg(arr,3);
*/
/*
let fun3 = async(n) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`I am invoked after ${n} second(s)`);
        }, n*1000);
    })
}
(async() =>{
    console.log(await fun3(1));
    console.log(await fun3(2));
    console.log(await fun3(3));
    console.log(await fun3(4));
    console.log(await fun3(5));
})();
*/

const interestCalc = (money,rate,time) => (money*rate*time)/100;
console.log(interestCalc(1000,5,5));