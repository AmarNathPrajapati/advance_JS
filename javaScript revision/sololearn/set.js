// here we are set in js
let arr  = [1,2,3,3,2,3,4,3,4];
let set = new Set(arr);

// set has following methods -----> add , delete, has , clear , values

set.add(5);
set.add(7);// add one element at a time
console.log(set);
console.log(set.size);
console.log(set.has(9));
console.log(set.values());
for(let i of set.values()){
    console.log(i);
}
