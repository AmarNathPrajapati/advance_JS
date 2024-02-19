/**Problem statemnet */
/**
 * In JavaScript, call, bind, and apply are methods used to control the value of this within a function, and to pass arguments to a function in different ways.
 */
let userDetails = {
    name:"Amar Nath",
    age:22,
    role:"Software Engineer",
    
}

let printDetails = function(state, country){
    console.log(this.name + " "+state + " "+country)
}


let userDetails2 = {
    name:"Amar Nath",
    age:22,
    role:"Software Engineer"
}

/* Call */
printDetails.call(userDetails,"Uttar Pradesh","India");
/* Apply */
printDetails.apply(userDetails,["Delhi","India"]);//for more value have to send data in the form of array
/***
 * Bind: Directly call karane ke bajay ek copy bana lo
 */
let newFun = printDetails.bind(userDetails,"Uttar Pradesh","India");
newFun();