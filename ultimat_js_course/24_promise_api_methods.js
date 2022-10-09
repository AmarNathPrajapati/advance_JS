let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("first Promise resloved ");
    }, Math.random()*5000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("second Promise resloved ");
        reject(new Error("second promise failed"));
    }, Math.random()*5000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("third Promise resloved ");
    }, Math.random()*5000);
})
// method 1 i.e. promise.all()
// let promise_all = Promise.all([p1,p2,p3]);

// method 2 i.e. promise.allSettled()
// let promise_all = Promise.allSettled([p1,p2,p3]);

// method 3 i.e. promise.race()
// let promise_all = Promise.race([p1,p2,p3]);//may give error

// method 4 i.e. promise.any()
// let promise_all = Promise.any([p1,p2,p3]);

// method 5 i.e. promise.resolve({})
// let promise_all = Promise.resolve({
//     "status":"fullfilled",
//     "Poore huye vade":"Ab hai nay irade"
// });

// method 6 i.e. promise.reject({})
let promise_all = Promise.reject(new Error("Sorry Baby!"))

promise_all.then((value)=>{
    console.log(value);
})