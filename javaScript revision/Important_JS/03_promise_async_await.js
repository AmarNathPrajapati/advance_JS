/* async means aapka function backend me run hog but uske andar ka function sequence me run hoga 
,basically async await ek tarika hai non blocking ko block karne ka.
eska matlab jo javascript asynchronous thi usko maine synchronous bana diya.
await use karane ke liye funcion ka asynchronous hona jaruri hai.*/

// let fs = require('fs');
let fs = require('fs/promises');
    // let a = fs.readFile('file.txt','utf-8',(err,data)=>{//reading file using callback function.
    //     console.log(data);
    // })
let a = fs.readFile('file.txt',"utf-8");// it return promises
    // console.log(a);
    // a.then((data)=>{
    //     console.log(data);
    // })
    // console.log("file reading complete");
let readthree = async() =>{
    let f1= fs.readFile("file.txt","utf-8");
    let f2= fs.readFile("file2.txt","utf-8");
    let f3= fs.readFile("file3.txt","utf-8");
    let c1 = await f1;
    console.log(c1);
    let c3 = await f3;
    console.log(c3);
    let c2 = await f2;
    console.log(c2);

}
readthree();