/* solution 1
let home  = document.getElementById('home');
home.addEventListener("click",()=>{
    alert("you clicked on Home")

})
let about  = document.getElementById('about');
about.addEventListener("click",()=>{
    alert("you clicked on about")

})
let contact  = document.getElementById('contact');
contact.addEventListener("click",()=>{
    alert("you clicked on contact")

})
let service  = document.getElementById('service');
service.addEventListener("click",()=>{
    alert("you clicked on service")

})
*/
/** solution 3 */
/**********space are not negligle in id or class name 
let google  = document.getElementById('google');
let whatsapp  = document.getElementById('whatsapp');
let youtube  = document.getElementById('youtube');
google.addEventListener("click",()=>{
    location.href = "https://google.com";
})
whatsapp.addEventListener("click",()=>{
    window.location = "https://whatsapp.com";
})
youtube.addEventListener("click",()=>{
    window.location = "https://youtube.com";
})
*/

/** solution 4 */
let url = "https://dog.ceo/api/breeds/image/random";
let responseData = async() =>{
    let data = await fetch(url);
    let response = await data.json();
    return response;
}
let main = async() =>{
    let realData = await responseData();
    console.log(realData);
    let imgData = document.getElementById('imgData');
    imgData.src = realData.message;
}
let bulb = document.getElementById('bulb');
setInterval(() => {
    // main(); 
},2500 );
/** solution 5 */
setInterval(() => {
    // bulb.classList.toggle("bulb");
}, 200);
