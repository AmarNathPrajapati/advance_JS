let p1 = new Promise((resolve,reject)=>{
    resolve("Completed my promise");
})
p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        resolve("I again completed my promise")
    })
}).then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        reject("Sorry Babu!")
    })
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})