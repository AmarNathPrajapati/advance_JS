/* map--> using map you can easily change content of each value of array 
it doesn't effect your original array.*/
let a = [ 1,2,3,4,5,6];
let b= a.map((value)=>{
    return value*2;
})
console.log(b);
//filter
    let c = a.filter((value)=>{
        return value>6;
    })
    // console.log(c);
//reduce
    let d = a.reduce((a,b)=>{
        return a*b;
    })
    // console.log(d);
// comparision karte samay javascript sabse pahle sabko ek data me convert karata hai to compare withd data type you have to use "===".
