console.log("Here we are setting alarm");
const setAlarm = document.getElementById("setAlarm")
setAlarm.addEventListener("click",alarmSet)
function ringBell(){
    const audio = new Audio("music.mp3");
    audio.play();
}
function alarmSet(e){
    e.preventDefault();
    console.log("Setting Alarm")
    const alarm = document.getElementById("alarm")
    alarmDate = new Date(alarm.value);
    now = new Date();
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}