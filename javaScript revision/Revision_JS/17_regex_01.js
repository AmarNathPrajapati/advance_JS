// javaScript regular expression
let reg = /programmer/g;
let str = "Chandan is a good programmer, coder is also programmer";

/**
 * regex function
 * exec()
 * test()
 * string function with regex
 * match()
 * search()
 * replace()
 */
let result = reg.exec(str);
// console.log(result);// it return a object
// console.log(result.input);// it return a object
// console.log(result.index);// it return a object

/**
 * if not match , input throw cannot read property of the null.
 */
let result1 = reg.test(str);
// console.log(result1);

let result2 = str.match(reg);//array 
// console.log(result2);
let result3 = str.search(reg);//it return index
// console.log(result3);
let result4 = str.replace(reg,"Coder");//it replace regex
// console.log(result4);