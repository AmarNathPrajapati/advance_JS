/**
 * By default nature of JS is synchronous
 * Means it execute the code line by line
 * But it doesn't wait to execute asynchronous function like setTimeOut
 * if you want to line by line execution then use concept of
 * 1.Callback
 * 2.Promise
 * 3.Async/Await
 */

console.log("first line\n");


async function ruko(){
    await setTimeout(()=>{
    console.log("second line\n");
    },2000)
}
ruko ()

console.log("Third line\n");

// function fourth_line(){
//     console.log("fourth line\n");
// }
// setTimeout(fourth_line,1000);