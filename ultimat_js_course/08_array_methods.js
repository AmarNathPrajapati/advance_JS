// array methods
// array are not immutable as string
// methods which doesn't change array: toString,join('_'),
// methods which change array:push(1),pop(),shift(),unshift()
let arr = [1,"Chandan",true,{
    "programmer":"true",
    "age":20,
},5,6,7]
console.log(arr.toString());//string
let c  = arr.join('_');//string
// console.log(arr.pop());//return poped elements
// console.log(arr.shift());//return first positioned elements
// console.log(arr.push(5));//return lenght of new array
console.log(arr.unshift(5));//return lenght of new array
console.log(arr);
