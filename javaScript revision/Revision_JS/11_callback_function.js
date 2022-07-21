// function read(){
    
// }
// function sleep(){
//     setTimeout(() => {
//         console.log("sleeping");
//     }, 1000);
// }
function sleep(){
    setTimeout(() => {   
        console.log("I am sleeping");
    }, 1000);
}
// setTimeout(() => {
//     console.log("I am reading");
//     sleep();
// }, 1000);
function read(name,sleep){// sleep is a  call back fucnction means a function invoke after a function
    setTimeout(() => {  
        console.log(`I am reading since ${name}`);
        sleep();
    }, 2000);
}
read("morning",sleep);