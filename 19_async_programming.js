//asynchronous programming
for (let index = 0; index < 51; index++) {
    console.log(index);
}
console.log("Task completed after sync");

// asynchronous programming-> Aage bado!
setTimeout(() => {
    for (let i = 0; i < 2500; i++) {
        console.log(i);
    }
}, 100);//100ms
console.log("Task completed by async");
