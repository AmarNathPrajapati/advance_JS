/**
 * 
 */

(function greet(){
    console.log("Good Night");
})();//syntax for immediately invoke function expression(IIFE)

// (let foo = () =>{
//     console.log("Have a nice day!");
// })(); error

const func1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(200);
        }, 2000);
    })
}
(async()=>{
    let a = await func1();
    console.log(a);
    let b = await func1();
    console.log(b);
    let c = await func1();
    console.log(c);
})();
