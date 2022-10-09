let p1 = new Promise((resolve,reject)=>{
    resolve("Done Sir");
})
p1.then((value)=>{
    console.log("value with first handlers "+value);
})
p1.then((value)=>{
    console.log("value with second handlers "+value);
})
p1.then((value)=>{
    console.log("value with third handlers "+value);
})