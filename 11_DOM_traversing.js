let a = document;
a=document.querySelector(".container")
console.log(a.childNodes);
console.log(a.childNodes);
console.log(a.childNodes[1].childNodes);
console.log(a.children);//for only element
console.log(a.childElementCount);
console.log(a.children[0].parentNode);
console.log(a.childNodes[1].nodeType);
console.log(a.children[0].parentNode);
console.log(a.children[0].children[0].className);
console.log(a.children[0].children[0].id);
console.log(a.children[0].children[0].nextElementSibling);
let form=document.getElementById("myform");
console.log(form);
form.innerHTML=`<input type="text" placeholder="type your address">`;
