//create a todo list using concept of local host.
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let submit = document.getElementById("submit");
let del = document.getElementById("delete");
let todo = document.getElementById("todo");
let val = ``;
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let titleVal = title.value;
    let descVal = desc.value;
    localStorage.setItem("todo",JSON.stringify([titleVal,descVal]))
    let todoVal = JSON.parse(localStorage.getItem("todo"));
    val = `
    <div class="col">
    <h3>${todoVal[0]}</h3>
    <p>${todoVal[1]}</p>
    </div>
    `;
    todo.innerHTML = val;
    title.value = "";
    desc.value = "";
})
del.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML=``;
})//delete is pre reserve keyword in js
let todoVal = JSON.parse(localStorage.getItem("todo"));
    val = `
    <div class="col">
    <h3>${todoVal[0]}</h3>
    <p>${todoVal[1]}</p>
    </div>
    `;