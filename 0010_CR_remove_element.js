let elem = document.createElement('input');
elem.setAttribute('placeholder','Enter Your mobile NO.');
elem.setAttribute('type','number');
let myform=document.getElementById('myform');
console.log(myform);
myform.appendChild(elem);
let p = document.createElement('p');
let b = document.createElement('b');//appending
let text= document.createTextNode('welcome to coding world');
p.appendChild(text)
console.log(p)
b.append(text)
console.log(b);//replacing
let heading= document.querySelector('h2');
heading.replaceWith(b);
let ul = document.querySelector(".ul1");
let ochild = document.getElementById('lid3');
ul.replaceChild(b,ochild)//removing
ul.removeChild(b)

// assignment
let h1 = document.createElement('h1');
let a = document.createElement('a');
a.setAttribute('href','https://www.codewithharry.com');
let text2=document.createTextNode("Go to codewithharry website")
a.append(text2);
console.log(a);
h1.appendChild(a);
console.log(h1);
let container = document.querySelector('.container');
container.appendChild(h1);

