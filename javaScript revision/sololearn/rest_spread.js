function containAll(arr,...nums){
    for(let num of nums){
        if(arr.indexOf(num)===-1){
            return false
        }
    }
    return true;
}
let x = [2,4,6]
console.log(containAll(x,2,4,7))

function integer(...nums){
    for(let val of nums){
        console.log(val);
    }
}
integer(1,2,3,4,5);

function myFunc(w,x,y,z){
    console.log(w+x+y+z);
}
let args = [1,2,3];
myFunc(...args,10);

let dob = [2002,6,6];
let dateOfBirth = new Date(...dob);
console.log(dateOfBirth);