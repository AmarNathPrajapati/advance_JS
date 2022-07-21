 let age = 18;
if ( age=="20"){
    console.log("you are 20 years old")
}
if ( age!=="20"){
    console.log("you are 20 years old")
}
let a = (age==20)?"you are 20 year old":"you are not 20 year old";
console.log(a);


switch (age) {
    case 30:
    case 20:
    case 18:
        console.log('you are either 18 or 20 or 30 years old');
        break;

    default:
        console.log("please tell me your age");
        break;
}

