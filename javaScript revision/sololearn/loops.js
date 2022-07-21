let obj = {
    "name":"Chandan",
    "Age":20,
    "Programmar":true
}
// the "for in" loop access the key of the object
for(let key in obj){
    console.log(key);
}

// "for of " loop access the array,map ,set and string
let list  = ["x","y","z"];
for(let val of list){
    console.log(val);
}

let str = "Chandan";
for(let val of str){
    console.log(val);
}

// for each loop only for iterating array
list.forEach(element => {
    console.log(element);
});

