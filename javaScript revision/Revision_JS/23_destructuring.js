/**
 * Destructuring--
 *      in object destructuring variable name must be in object.
 *      but not necessary in array.
 */
let [a,b] =[2,3];
// console.log(a,b);
[a,b,c,d]=[1,2,3,5,5,7,7,8,5,4,3,5,6,2];//here d will get 5;
// console.log(a,b,c,d);
[a,b,c,...d]=[1,2,3,5,5,7,7,8,5,4,3,5,6,2];//here d will become array of other element.
// console.log(a,b,c,d);
({a,b,c} = {a:2,b:3,c:4});//() is play important role.
// console.log(a,b,c);
/************************Array Destructuring  *********/
let name1 = ["amar","Chandan","Golu"];
[a,b,c] = name1;
// console.log(a,b,c);

/*********Object Destructuring *********/
let obj = {
    "name":"Chandan",
    "Age" : 20,
    "Programmer":true
}
const {name,Age,Programmer1}=obj;
console.log(name,Age,Programmer1);
