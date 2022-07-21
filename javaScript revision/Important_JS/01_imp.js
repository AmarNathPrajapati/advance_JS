/*1.Spread Operator--> 
    syntax (...);
    it opens the array;
2.Destructuring -->
    value bahar nikalane ke liye
    syntax {variables}=object
*/

//1.spread operator with arrays
    let a = [1,2,3,9,10];
    let avg = (a,b,c) => (a+b+c)/3;
    let average = avg(...a);// it takes only three argument from a;
    // console.log(average);
    let b = [...a,5,6,7];
    // console.log(b);
    let c = [...b];//copy the content of b in c;
    // console.log(c);
//2.spread operator with objects
    let obj={
        Name:"Chandan",
        Class:"5a",
        lang:"Hindi"
    }
    let obj2 = {...obj,lang:"English"}//copy all content from obj and modify the lang.
    // console.log(obj2);
//3.Destructuring of objects
    let {Name,Class,lang} = obj;//object me se followig variable ko nikal lo
    console.log(Name);
    console.log(Class);
    console.log(lang);


