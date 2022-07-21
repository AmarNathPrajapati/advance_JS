// JSON -  javaScript object Nonation
// json is just only javaScript Object
let myJson ={
    "name":['Chandan','Amar Nath'],
    "age":19,
    "Programmer":true,
    "from":"Jaunpur U.P."
}
console.log(myJson);
//let us convert valid json to string
let jsonToString = JSON.stringify(myJson);
console.log(jsonToString);
//change the json content
jsonToString=jsonToString.replace('Chandan','Golu');
console.log(jsonToString);
//again convert json to string
myJson = JSON.parse(jsonToString);
console.log(myJson);



