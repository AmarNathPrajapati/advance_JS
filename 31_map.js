// maps- has any type of key and value pairs
// initializing a map
    const myMap = new Map();
    const key1 = 'Amar Nath',key2 = {}, key3 ='Chandan';
//setting value in map
    myMap.set(key1,"my name is Amar Nath")
    myMap.set(key2,[1,2,4])
    myMap.set(key3,"my name is Chandan")
    //console.log(myMap);
//getting the value from Map
    console.log(myMap.get(key1));
    console.log(myMap.get(key2));
//size of map
console.log(myMap.size);
//iteration using for of loop
    for(let[keys,value] of myMap){
        //console.log(keys,value);  
    }
    for(let key of myMap.keys()){
        //console.log(key);  
    }
    for(let value of myMap.values()){
        //console.log(value);  
    }
//iteration using forEach loop
    myMap.forEach((values,key) => {
    // console.log(key,values);
    //console.log(key);                   /*for better understading use one by one*/
    // console.log(values);
});
//map to array conversion
    let myArr = Array.from(myMap)
    console.log(myArr);
    myArr = Array.from(myMap.keys())
    console.log(myArr);
    myArr = Array.from(myMap.values())
    console.log(myArr);


