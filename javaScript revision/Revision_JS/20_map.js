/**
 * Map in javaScript (constructor)
 * Map's key can be empty fucntion
 *      there are following methods af Map
 *          1.set(key,vaule)
 *          2.get(key)
 *          3.map.values()
 *          4.map.keys()
 */
let myMap = new Map();
let k1 = "str";
let k2 = {};
let k3 =function(){};
let k4 = {
    'name':"Chandan",
    'age' : 20,
    "programmer" : true,
    "language":"javaScript"
}
myMap.set(k1,"this is a string");
myMap.set(k2,"this is an empty object");
myMap.set(k3,"this is an empty function");
myMap.set(k4,"this is an object");

// console.log(myMap.get(k1));

/**for loop for object */
// for([key,value] of myMap){
//     console.log(key,value);
// }
for(keys of myMap.keys()){
    console.log (keys);
}
// for(values of myMap.values()){
//     console.log(values);
// }

// //converting map into an array
// Array.from(myMap).forEach((value,key)=>{
//     console.log(key , value);
// })
// Array.from(myMap.keys()).forEach((key)=>{
//     console.log(key);
// })
// Array.from(myMap.values()).forEach((key)=>{
//     console.log(key);
// })