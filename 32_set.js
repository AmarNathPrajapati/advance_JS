/******SET*********/
// intializing of set
    let mySet = new Set();
// adding the value in set
    mySet.add('Chandan');
    mySet.add(121);
    mySet.add('Chandan')
    mySet.add([1,2,4]);
// size of SET
    //console.log(mySet.size);
//initializing using constructor
let mySet2 = new Set([1,3,2,2,2,true,{name:'Chandan'}])
// SET FUNCTIONS
    //console.log(mySet2.has(1));
    //(mySet2.delete(1));
    //console.log(mySet2);
//iteration of SET
    for(let key of mySet){
        //console.log("value in set using for-of",key); 
    }
    mySet2.forEach((key)=>{
        //console.log("Set's value using forEach",key);
    })
//convert SET into ARRAy
    let myArr=Array.from(mySet2)
    //console.log(myArr);
// main uses of Set
    let num = [12,2,234,3435,45,55,5,4,3,34,5,34,12,234];
    //console.log(num.length);
    console.log(num);
    let newSet = new Set(num);
    //console.log(newSet.size);
    let newArr = Array.from(newSet);
    //console.log(newArr.length);
    console.log(newArr);




