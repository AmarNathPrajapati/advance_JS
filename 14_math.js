//Here I am discussing 'Math' object in javaScript.
let mathObj=Math
console.log(mathObj)
let num;
num=Math.PI
num=Math.SQRT1_2//sqrt(1/2)
num=Math.abs(-34);
num=Math.cos(Math.PI)
num=Math.floor(-3.24);
num=Math.round(5.34)
num=Math.ceil(5.334)
num=Math.pow(2,3);
num=Math.sqrt(25)
console.log(num);

// Generating of Random Number
let rand=Math.random()
console.log(rand);
/*random number between a and b
a+rand*(a-b)*/
rand= Math.ceil(1000 + rand*(10000-1000));
console.log(rand);