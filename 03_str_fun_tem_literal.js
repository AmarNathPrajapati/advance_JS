let name = "chandan"
let category = "prajapati"
name = name.concat(' && Amar Nath');
console.log(name.length);
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name+" " + category);

let str= "Amar Nath Prajapati";
console.log(str.indexOf("Nath"));
console.log(str.lastIndexOf("i"));
console.log(str.charAt(3));
console.log(str.endsWith('i'));
console.log(str.includes('z'));
console.log(str.substring(5,9));
console.log(str.slice(-2));
console.log(str.split(" "));
console.log(str.replace("Amar Nath","Chandan"));
console.log(str);

let str2="chandan Prajapati"
let myhtml = `<h1> Welcome ${str}</h1>`;
document.write(myhtml);




