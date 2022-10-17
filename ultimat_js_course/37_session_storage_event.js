localStorage.setItem("Nephew","Lucky");
sessionStorage.setItem("Neice","Aanandi");//only for one session
let a = sessionStorage.getItem("Neice");
console.log(a);
window.onstorage = (e) =>{// work with local storage
    alert("storage updated");
    console.log(e);
}