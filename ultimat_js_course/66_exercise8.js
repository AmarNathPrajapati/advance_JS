console.log("Here we are setting alarm");
const setAlarm = document.getElementById("setAlarm")
// let alarmGif = document.getElementById("alarm")
setAlarm.addEventListener("click",alarmSet)
function ringBell(){
    const audio = new Audio("alarm.mp3");
    alarmGif.src = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alarm_Clock_GIF_Animation_High_Res.gif";
    audio.play();
}
function alarmSet(e){
    e.preventDefault();
    console.log("Setting Alarm")
    const alarm = document.getElementById("alarm")
    //setting time
    let newNow = new Date();
    let str = String(newNow);
    let aTime = str.slice(0,15)+" "+alarm.value;
    alarmDate = new Date(aTime);
    //current time
    now = new Date();
    console.log(now);
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
    alert("Your Alarm is set successfully");
}

let newDate = new Date()