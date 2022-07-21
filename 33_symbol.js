// *********Symbol***********
// Symbol is a primitive datatype in javaScript
let sym = Symbol("name");
let sym2 = Symbol("name");
console.log(sym===sym2);//this is main property of symbol
console.log(sym);
console.log(typeof(sym));
//declaring object's keys as a symbol
let k1=Symbol('this');
let k2=Symbol('that');
let num="number"
let myObj = {}
myObj[k1]="Amar";
myObj[k2]="Chandan";
myObj[num]=123
console.log(myObj);
//itertion of for loop
for(let key in myObj){
    console.log(myObj[key]);//symbol are ignored in for loop
    
}
console.log(JSON.stringify(myObj));//here symbol are ingored


