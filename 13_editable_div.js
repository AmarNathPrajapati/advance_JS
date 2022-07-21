//creating div element
let div = document.createElement('div');
//set id,class and style to 'div' element
div.setAttribute('id','elem');
div.setAttribute('class','elem');
div.setAttribute('style','border:2px solid blue; width:200px');
//creat default text for the div
//append text in div
let text = localStorage.getItem('text');
if(text==''){
     text =document.createTextNode('This is default text , it can be edit');
}else{
    text = document.createTextNode(text);
}
div.appendChild(text);
console.log(div)
//appending div into the container
let container=document.querySelector('.container');
//fetching first element from DOM
let first = document.getElementById('first');
container=container.insertBefore(div,first);

//eventlistner on div
div.addEventListener('click',function(e){
    let notextareas=document.getElementsByClassName('textarea').length
    if(notextareas==0){
        let html=div.innerHTML;
        div.innerHTML=`<textarea id="textarea" class="textarea">${html}</textarea>`
    }
    let textarea=document.getElementById("textarea");
    textarea.addEventListener('blur',function(){
        div.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value);
    })

})

