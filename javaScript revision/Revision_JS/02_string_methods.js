console.log("Here we are learning the string methods and property");
let str = "I am learning strings methods and property";
let str2 = " concat using concat method";
// note -- all the string function does not change the actual string.
str=str.toLowerCase();
// str=str.toUpperCase();
console.log(str.charAt(0));
console.log(str.indexOf("am"));
console.log(str.includes("am"));
console.log(str.lastIndexOf("i"));
console.log(str.concat(str2));
console.log(str.length);
console.log(str.endsWith("y"));
console.log(str.replace("and","aur"));
console.log(str.search("am"));
console.log(str.split(" "));// it return arrays
console.log(str.slice(0,3));
console.log(str);