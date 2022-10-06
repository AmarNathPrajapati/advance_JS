let first_promise = new Promise((resolve,reject)=>{
    console.log("first promise is pending....");
    setTimeout(() => {
        console.log("I completed my promise");
        resolve("Done you work");
    }, 2000);
})
let second_promise = new Promise((resolve,reject)=>{
    console.log("second promise is pending....");
    setTimeout(() => {
        console.log("I didn't complete my promise");
        reject("I'm sorry babu");
    }, 2000);
})
second_promise.catch((error)=>{
    console.log(error);
},(error)=>{
    console.log(error);
})
first_promise.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
