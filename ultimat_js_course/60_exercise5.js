let zeroOne_div = document.getElementById("zeroOne1");
let val = zeroOne_div.innerText;
setInterval(() => {
    val = val+"01010101011011010101010101010101001001010101010101011010<br>";
    zeroOne_div.innerHTML = val;
}, 2000);
let zeroOne_div2 = document.getElementById("zeroOne2");
let val2 = zeroOne_div.innerText;
setInterval(() => {
    val2 = val2+"01010101011011010101010101010101001001010101010101011010<br>";
    zeroOne_div2.innerHTML = val;
}, 2000);
let arr = [
    "hacking...",
    "hacking1...",
    "hacking2...",
    "hacking3...",
    "hacking4...",
    "hacking5...",
];
let hack_div = document.getElementById("hackData");

let func1 = async(i) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(arr[i]);
        }, 2000);
    })
}
(async() =>{
for(let i = 0; i<arr.length; i++){
    let hack_val = await func1(i);
    hack_div.innerHTML += hack_val +"<br>"
}
})();