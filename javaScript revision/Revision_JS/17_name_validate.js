let str = "Amar Nath";
let reg = /[a-zA-Z]/;
let result = reg.test(str);
if(result){
    console.log("valid");
}else{
    console.log("invalid");
}