/* solution 1 */
// document.getElementById("navbar").firstElementChild.style.color = 'red';
/* solution 3 */
// document.getElementById("navbar").firstElementChild.style.color = 'green';
// document.getElementById("navbar").lastElementChild.style.color = 'green';
/* solution 4 */
let lists = document.getElementsByTagName('li');
Array.from(lists).forEach((e)=>{
    e.style.backgroundColor = 'cyan';
})