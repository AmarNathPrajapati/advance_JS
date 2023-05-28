try {
    
    // let age = parseInt(prompt("Enter the age"));
    let age = 17;
    if(age<18){
        throw new Error("Padh le bachche, jindagi and javani laut kar nahi aayegi")
        // throw new ReferenceError("Padh le bachche, jindagi and javani laut kar nahi aayegi")
        // throw new SyntaxError("Padh le bachche, jindagi and javani laut kar nahi aayegi")
    }
} catch (chetawani) {
    console.log(chetawani.name);
    console.log(chetawani.message);
    console.log(chetawani.stack);
}