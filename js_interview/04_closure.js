function sum(a){
    console.log("The value of a is: ",a);
    let c = 10;
    return function func(b){
        return a+b+c;
    }
}
let closure = sum(2);
let ans = closure(4);
console.log("Answer from closure is: ",ans);