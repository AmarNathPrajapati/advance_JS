// let greet = () => console.log("Good Morning");
let greet = name => console.log("Good Morning:",name);
greet("Chandan");

let obj = {
    "name":"Chandan",
    "Role":"JS developer",
    "Age":20,
    "detail":function() {
        // setTimeout(function() {//eske pass object nahi hai, so it is showing undefined
        //     console.log("Name:",this.name);
        //     console.log("Role:",this.Role);
        //     console.log("Age:",this.Age);
        // }, 2000);
        setTimeout(()=> {//arrow function ka this parent ka this hota hai, apna object nahi hota hai.
            console.log("Name:",this.name);
            console.log("Role:",this.Role);
            console.log("Age:",this.Age);
        }, 2000);
    }
}
obj.detail();// normal function ka this vahi object hota hai, jisame vo hai.
