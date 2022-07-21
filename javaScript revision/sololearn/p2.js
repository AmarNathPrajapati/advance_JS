const readline = require('readline-sync');
function main() {
    console.log("Enter the depth");
    var depth = parseInt(readline.question(), 10);
    //your code goes here
    let coverHeight = 0;
    let i;
    for( i = 1; i<1000; i++){
        coverHeight+=7;
        if(coverHeight>=depth){
            console.log(i);
            break;
        }
        coverHeight-=2;
    }
    
}
main();