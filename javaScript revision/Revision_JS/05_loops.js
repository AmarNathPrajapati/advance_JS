let obj = {
    "name":"Chandan",
    "age":20,
    "programmer":true,
    "nationality":"Indian",
}
for(let key in obj){
    // console.log(`The vlaue of ${key} is ${obj[key]}`);
}
// Array.from(htmlcollection).forEach((e)=>{
//     console.log(e);
// })
let arr = [1,2,"orange","Chandan",true,12.23];
arr.forEach((element,index,arr)=>{
    // console.log(element,index,arr);
})
