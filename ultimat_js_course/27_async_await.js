let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("I swear of my first love that I will never waste my time in bad thing");
    }, 5000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("rather than wasting time in very bad thing, I am enjoying with new way like learnig new dance step, learning new technology and explore journey of successful people")
    }, 2000);
})

let amar = async() =>{// async make function promise, i.e. async always return promise
    console.log("first promise ....");
    let p1_value = await p1;//await always use with promises yaha se promise execution start hai, like p1.then()
    console.log("first promise resolved");
    console.log("second promise ....");
    let p2_value = await p2;// parallaly nahi synchronuou behaviour show kar raha hai aur agar p2 ka time p1 se kam hai toh no need to again wait for the p2.
    console.log("second promise resloved");
    return [p1_value,p2_value];
}
console.log("function call...");
let result = amar();
result.then((value)=>{
    console.log(value);
})