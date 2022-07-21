/*__________Array Destructuring____________*/

//direct destructuring
let arr = [1,2,3];
let[a,b,c]= arr;
console.log(a);
console.log(b);
console.log(c);
//desturcturing through function
let func = () => ["Chandan","Golu","Steve"];
let[avg1,avg2,avg3] = func();
console.log(avg1);
console.log(avg2);
console.log(avg3);
//swapping through destucturing
[a,b] = [b,a]
console.log(a);
console.log(b);


/*_________Object desturcturing_________*/
let obj = {
    a1:100,
    b1:true
}
let{a1,b1} = obj;//key name must be same
console.log(a1);
console.log(b1);
let{a1:val,b1:val2} = obj;
console.log(b1);
console.log(val);
console.log(val2);


let{id=10,age="infinite",name1}={id:42,name1:"Marvel"};
console.log(id);
console.log(name1);
console.log(age);

