// How to throw error in the program
        // let user = "Amar";
        // if(user){
        //     throw new Error("The user is not defined")
        // }else{
        //     console.log('user is defined');
        // }
// how to handle error in javaScript
try{
    let user = "Amar";
    if(user){
        throw new Error("The user is not defined")
    }else{
        console.log('user is defined');
    }    
}catch(error){
    console.log("you are in catch block because..");
    console.log(error);
    console.log(error.name);
    console.log(error.message); 
}finally{
    console.log("this block must be excuted whether any block run or not");
}