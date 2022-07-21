//async function always return a Promise
//await keyword to make fucntion asynchronous
// const func1  = async () =>{
//     return ("Golu is working hard");
// }
// console.log(func1());

const getData = async () =>{
    console.log('step2');
    let url = 'chandan.json';
    const response =await fetch(url);//get an response
    console.log('step4');
    console.log(response);
    const data =await response.json();//get data
    console.log('step5');
    console.log(data);
}
console.log('step1');
getData();
console.log('step3');
/*
 * fetch()--> it returns Response and it return Response.json() .
 */