/****Example 1 */
function sum(a) {
    console.log("The value of a is: ", a);
    let c = 10;
    return function func(b) {
        return a + b + c;
    }
}
let closure = sum(2);
let ans = closure(4);
console.log("Answer from closure is: ", ans);

/**Example 2 */
function myClosure(x, y, z) {
    return {
        twoNumberSum: () => {
            let a = 12;
            console.log(x + y + a);
        },
        threeNumberSum: () => {
             console.log(x+y+z);
        }
    }
}
let closure2 = myClosure(1,2,3);
closure2.twoNumberSum();
closure2.threeNumberSum();