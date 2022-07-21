// function greet(){
//     console.log("Good Morning");
// }

// arrow fuction reduces the effort to writting function
let greet = () =>{
    console.log("good night"); 
}
//here we direct return without writting return
// let sum = (a,b) => a+b;
// console.log(sum(3,5));
// setTimeout(() => {
//     console.log(sum(5,6));
// }, 4000);


//write a program to print to say every person good day
let obj = {
    "person":['Chandan','Amar Nath','Golu','Saurabh'],
    // speak(){
    //     this.person.forEach(element => { // here arrow function point the object(person) in parent obj.
    //         console.log("Good Day " + element);
    //     });
    // }
   speak(){
        this.person.forEach(element => { // here arrow function point the object(person) in parent obj.
            console.log("Good Day " + element);
        });
    }
}
obj.speak();