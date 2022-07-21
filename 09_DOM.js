let a = document
a = document.all
a = document.links
a = document.images[0]
a = document.scripts[0]
// a=document.forms
// Array.from(a).forEach(function(i){
//     console.log(i);
// })
//console.log(a);
for (let i = 0; i < 10; i++) {
    a = document.links[i].href.toString();
    let str = "codewithharry";
    if (a.includes(str)) {
        console.log(a);
    }
}