let doNothing = document.querySelector('h1');
doNothing = document.querySelector('#doNothing');
console.log(doNothing);
doNothing.addEventListener('click', nothing)
function nothing(e){
    e.preventDefault();
    alert('alert');
}