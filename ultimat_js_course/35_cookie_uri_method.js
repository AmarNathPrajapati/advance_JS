// console.log(document.cookie);
document.cookie = "name=chandan";
console.log(document.cookie);
// document.cookie = "name=Lucky";//update
// document.cookie = "name1=Golu";//update

document.cookie ="123+;=abcz";// for that use encodeURIComponent and decodeURIComponent uri method
let key = encodeURIComponent(prompt("enter the key"));
let value  = encodeURIComponent(prompt("enter the value"));
document.cookie = `${key}=${value}`;
console.log(document.cookie);
