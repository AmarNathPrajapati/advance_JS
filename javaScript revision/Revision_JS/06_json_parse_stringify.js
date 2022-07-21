let obj = {
    "name":"Chandan",
    "age":"Twenty"
}
let jsonStr = JSON.stringify(obj);
console.log(obj,typeof(obj),jsonStr,typeof(jsonStr));

let str = "Chandan";
let jsonObj = JSON.parse(str);
console.log(str,typeof(str),jsonObj,typeof(jsonObj));

