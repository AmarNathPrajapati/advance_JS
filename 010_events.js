let h2 = document.querySelector("h2");
h2.addEventListener('click',link);
function link(e){
    console.log(e);
    console.log(e.target);
    console.log(e.offsetX);
    console.log(e.offsetY);
    // location.href="web.html";
}
let sub = document.getElementById("sub");
sub.addEventListener('click',print);
function print(e){
    e.preventDefault();
    console.log("good night")
}

let body = document.querySelector('body');
body.addEventListener('mousemove',rangeen);
function rangeen(e){
    console.log(e.offsetX);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},111)`;
}