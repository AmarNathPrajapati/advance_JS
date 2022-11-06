// closures = function + it's lexical environment
let a = 5;
function func1() {
    let a = 20;
    console.log("inside func1 another block: ", a);
    function func2() {
        return a;
    }
    // a = 50; return with reference of memory
    return func2;// a function return a function that is closure
}
console.log("out of func1: ", a);
let c = func1();
console.log("The value given by c is: ", c());//here c is with it's lexical environment


// another example
let a1 = () =>{
    let num1 = 10;
    let b1 = () =>{
        let num1 = 20;
        let c1 = () =>{
            let num1 = 30;
            let d1 = () =>{
                let num1 = 40;
                return num1;
            }
            return d1;
        }
        return c1;
    }
    return b1;
}
let new_func = a1();
console.log("The value given by new_fun: ",new_func()()());