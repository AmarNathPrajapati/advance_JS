//Manipulation in Local Storage in JavaScript
localStorage.setItem('name','Amar Nath');
console.log(localStorage.getItem('name'));
//storing array in localStorage
let items = ['paneer','Dahi','Makkhan'];
localStorage.setItem('items',JSON.stringify(items));
let store_item=JSON.parse(localStorage.getItem('items'));
console.log(store_item);
console.log(typeof(store_item));
console.log(store_item[0])

