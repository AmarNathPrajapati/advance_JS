/*inserting tag;
let newTag = document.createElement('hr');
document.getElementById('best_row').append(newTag);
*/


// load a script using promise
/*
    solution 1 return promise and get resolve value
    let loadScript = (src1) =>{
        //createing tag
        let loadScriptPromise = new Promise((reslove,reject)=>{
            let script1 = document.createElement("script");
            script1.src = src1;
            script1.onload = () =>{
                reslove(src1 + " srcipt loaded successfully")
            }
            document.head.append(script1);
        })
        return loadScriptPromise;
    }
    let src1 = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js";
    let load = loadScript(src1);
    load.then((val)=>{
        console.log(val);
    })
 */

/**
    async ka matlab mai promise return karunga
    promise hone ka matlab, aapko resolve hone ka await karana padega
    await ka matlab, mai promise ke liye wait karunga.
 */

/***
 * solution 2
 let loadScript =(src1) =>{
     //createing tag
     let loadScriptPromise = new Promise((reslove,reject)=>{
         let script1 = document.createElement("script");
         script1.src = src1;
         script1.onload = () =>{
             reslove(src1 + " srcipt loaded successfully")
         }
         document.head.append(script1);
     })
     return loadScriptPromise;
 }
 let src1 = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js";
 let load = async()=>{
     console.log(new Date().getMilliseconds());
     let val = await loadScript(src1);
     console.log(val);
     console.log(new Date().getMilliseconds());
 }
 load();
 */


/***
 * solution 3
 let newPromise = new Promise((resolve, reject)=>{
     setTimeout(() => {
         reject(new Error("Sorry Baby! I am too busy"))
     },3000);
 })
 let load = async() =>{
     try {
         let val =await newPromise;
         console.log(val);
     } catch (error) {
         console.log(error);
     }
 }
 load();
*/
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("first promise poori hui");
    }, 3000);
})
let ap1 = async() =>{
    return p1;
}
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("second promise poori hui");
    }, 1000);
})
let ap2 = async() =>{
    return p2;
}
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("third promise poori hui");
    }, 2000);
})
let ap3 = async() =>{
    return p3;
}
let loadAll = async() =>{
    console.log("Mai loadAll fucntion hoon");//1
    let a1= ap1();
    let a2 =ap2();
    let a3 = ap3();
    console.time("run");
    let val = await Promise.all([a1,a2,a3]);
    console.timeEnd("run");
    console.log(val);//4
}
loadAll();
let loadOne = async() =>{
    console.log("Mai loadOne function hoon");//2
    console.time("run2")
    let val = await ap1();//3
    console.log(val);
    let val2 = await ap2();//5
    console.log(val2);
    let val3 = await ap3();//6
    console.log(val3);
    console.timeEnd("run2")
}
loadOne();