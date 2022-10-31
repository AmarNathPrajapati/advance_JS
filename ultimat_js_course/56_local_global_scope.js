let global = 10;
let b = 10;
{
    var a = 5;//have global level scope
    // let b= 10;//let and const have
    // const c = 15;//block level scope
    console.log("block (var)a: ",a);
    console.log("global (let):",global);
}
function ai(){
    console.log("block (var)a: ",a);
    console.log("b outside: ",b);
    // console.log(c);
    console.log("global (let):",global);
}
ai();
