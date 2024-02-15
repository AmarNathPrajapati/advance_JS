let arr = [1,2,3,4,5]
let for_result = arr.forEach((element) => {
    return element
});
console.log(for_result);

let map_result = arr.map((element) =>{
    let val = element*5
    return val
});
console.log(map_result);

/**
 * Map can return the value and we can modify array using map and In react by map we can use jsx
 * map return kar sakata hai sot it useful in the react
 * arrow function me agar single line hai then no need to write return.
 * In map, If single line () chal jayega but if you want to use multiple line then you have to use {} and return
 */