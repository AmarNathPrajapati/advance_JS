let promise = new Promise(function(resolve,reject){
    console.log("I will complete my all pending work today");
    resolve(1051);
})
setTimeout(() => {
    console.log("Happy Dussehara");
}, 2000);
console.log("Happy RamNavami");
console.log(promise);// if promise resolve the value will print.