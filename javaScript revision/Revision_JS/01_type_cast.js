console.log("hello world");
// here we are learning type casting in java Script

// 1. to conver any data type in string we use 
// (a). String(another data type)
//(b). variable.toString().

let num  = 123;
num = String(num);
num = num.toString();
// console.log(num,typeof(num));
let bool = true;
bool = bool.toString();
// console.log(bool, typeof(bool));
let  arr = [1,2,3,4];
arr = String(arr);
// console.log(arr,typeof(arr));
let obj = {
    "name":"Chandan",
    "age":20
}
obj = obj.toString();
// console.log(obj,typeof(obj));

//2. type cast any data type into number
let str =" 123.232343";
str = Number(str);
str = parseInt(str);
str = parseFloat(str);
// console.log(str,typeof(str));
let bool1 = true;
bool1 = Number(bool1);
// console.log(bool1,typeof(bool1));
let number = 1323.23242;
// console.log(number.toFixed(3));


//3.String Coersion
let name1 = "chandan";
let num1 = 124;
console.log(name1+num);