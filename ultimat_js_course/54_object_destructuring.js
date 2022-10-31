//here variable name should be same as object name.
let res_body = {
    "Name":"Chandan",
    "age":"20",
    "Role":"Full Stack Developer"
}
console.log(res_body);
let {Name,age} = res_body;
console.log("name: ",Name);
console.log("Age: ",parseInt(age));