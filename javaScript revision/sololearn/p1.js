const readline = require('readline-sync');
function main() {
    console.log("enter the distance");
    var distance = parseInt(readline.question(), 10);
    //your code goes here
    let time;
    time = (distance/40)*60;
    console.log(time);
}
main();
