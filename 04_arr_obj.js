let arr = new Array('amar','chandan',12,5,[2,3,'prajapati'],'jaunpur');
console.log(arr.push(34));  
/* unshift ,pop, shift , slice(1,3), reverse*/
console.log(arr);
console.log(arr.indexOf('chandan'));
console.log(arr.length);
console.log(arr[4]);
console.log(arr[4][2]);
console.log(Array.isArray(arr));


let myobj={
    "first name":"chandan",
    "last name": "Prajapati",
    age: 19,
    arr:[23,24,34,3],
}
console.log(myobj);
console.log(myobj.age);
console.log(myobj.arr[1]);
console.log(myobj['age']);