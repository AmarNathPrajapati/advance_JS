/* Destructuring in JavaScript */
    let a,b=[3,4]//here a is undefined and b is an array
    let [c,d]=[3,4];//here c is 3 and d is 4
    console.log(c);
/* Array Destructuring */
    [a,b,c,...d]=[1,2,3,4,5,6,7,8,4,5,7,89];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);//here 'd' got all number after 3 in form of array
    let fruits = ['Apple','Banana','Papaya'];
    [a,b,c]=fruits;
    console.log(a);
    console.log(b);
    console.log(c);
/*Object Destructuring */
    ({a,b,c}={a:2,b:3,c:4});
    console.log(a);
    console.log(b);
    console.log(c);

    let info = {
        name:'Amar Nath',
        Age:19,
        Address:'Husenabad Jaunpur'
    }
    let {name,Age,Address}=info;
    console.log(name,Age,Address);








