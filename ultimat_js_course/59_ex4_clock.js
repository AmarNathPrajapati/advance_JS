function setClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hour_div = document.getElementById("hour");
    hour_div.innerHTML = hour;
    let minute_div = document.getElementById("minute");
    minute_div.innerHTML = minute;
    let second_div = document.getElementById("second");
    second_div.innerHTML = second;
}
setInterval(() => {
    setClock();
}, 1000);