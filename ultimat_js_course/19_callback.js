// callback -- pass a function inside a function and invoke that function.
function goodMorning(time,callback){
    console.log("Good "+ time +" friend");
    callback("Amar"); 
}
function name1(str){
    console.log("your name is "+ str);
}
// goodMorning();
// name1("chandan");

//concept of callback
goodMorning("evening",name1); 
