//for single module
// const hello = require("./module1");
// hello();

// for multiple modules
const m1 = require('./module1');
m1.ahello("Chandan");
m1.hello();

//using concept of object destructuring
const {hello,ahello} = require("./module1");
ahello("Adtiya powered by Amar");
hello();