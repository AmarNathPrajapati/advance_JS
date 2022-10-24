/*
//solution 1
let age = prompt("Enter your Age");
//solution 2
if(age==undefined){
    let a = confirm("you have not submitted a value");
    if(a){
        age = prompt("Enter your Age")
    }
}
if(age>18){
    alert("Oooooh! You can drive a car");
}else{
    alert("Sorry! you are not eligible for driving a car");
}
//solution 3
if(age<0){
    console.error("You have entered a negative age");
}
*/
/**
 * solution 5
 let changeColor = parseInt(prompt("Enter the number"));
 if(changeColor>23){
     document.body.style.backgroundColor = "yellow";
 }else{
     document.body.style.backgroundColor = "red";
 }
*/
/** solution 4 */
let num = parseInt(prompt("Enter the number"));
if(num>4){
    location.href = "https://google.com";
}