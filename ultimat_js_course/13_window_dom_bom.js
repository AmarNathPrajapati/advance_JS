// console.log(window);
// console.log(document);
// console.log(body);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild.firstElementChild);
let arr= Array.from(document.body.childNodes);
console.log(arr);
for(value of arr){
    console.log(value);
}