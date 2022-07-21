// *******for_in loop**********
    // we uses (for in) loop to iterate key value from object and sring . In general (for-in) loop not used to iterate an array.
    let arr = [12,45,'Amar Nath',{age:19},true]
    //traditional for loop method for iteration
    for (let index = 0; index <arr.length; index++) {
        const element =arr[index];
        //console.log(element);
    }
    for(let key in arr){
        //console.log(arr);
    }
    let str = "My name is Amar Nath"
    //traditional for loop for iterating string
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        //console.log(element);
    }
    for(let key in str){
        //console.log(str[key]);   
    }
    let obj = {
        name : 'Amar Nath',
        age : 19,
        mobile : 'Redmi'
    }
    // traditional for loop for iterating an object
    for (let i = 0; i < Object.keys(obj).length; i++) {
        const element = obj[Object.keys(obj)[i]];
        //console.log(element);
        
    }
    for(let key in obj){
        //console.log(obj[key]);
    }
// ********for-of_loop********
    // we can use for-of loop with any iterable datatypes like object , array ,string...

    // Iteration of Array
    for(let key of arr){
        //console.log(key);
    }
    //Iteration of string
    for(let key of str){
        //console.log(key);
    }
    //Iteration of Object
    //for(let key of obj){
        //console.log(key);// error , Object is not iterable
    //}
