// Here I am discussing DATE object in JavaScript
let today = new Date();
console.log(today);
let date = new Date('june 19 2000');
date= new Date("december 19 1999")
date= new Date("july 5 2002")
console.log(date);
console.log(today.getDate());
console.log(today.getMinutes());
console.log(today.getHours());
console.log(today.getTime());
console.log(today.getMonth());
console.log(today.getDay());
today.setDate(21);
console.log(today);
today.setMinutes(30);
today.setHours(0);
console.log(today)