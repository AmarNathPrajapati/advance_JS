/**
 * multicharacter in regular expression
 */
let reg = /coder/g;
reg = /^co/g;
reg = /er$/g;
reg = /co.er/g;
reg = /cod\*r/g;
reg = /coda?er/g;
reg = /ah*x/;
let str = "coder I ahx am a good coder and coder is also a good coder";//input
str = "I am a ahdgsdgsx good codfasdfer and coder is also a good coder";
// let result  = reg.exec(str);
let result  = reg.exec(str);
console.log(result);
// let result1  = reg.exec(str);
// let result1  = str.match(reg);
// console.log(result1);
// // let result2  = reg.exec(str);
// let result2  = str.match(reg);
// console.log(result2);