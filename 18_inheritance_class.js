// Creating a employee class
class employee{
    constructor(name ,salary,age){
        this.name=name;
        this.salary=salary;
        this.age=age;
    }
    slogan(){
        return `this is the best company.Regards,${this.name}`;
    }
    static add(a,b){//this fucntion is for all employee because here we are not using any inptu of object.
        return a+b;
    }
}
let amar = new employee('Amar Nath',100,19);
console.log(amar);
console.log(amar.slogan());
console.log(employee.add(343,54));

// Inheritance through "Classes"

class programmer extends employee{
    constructor(name,salary,age,language){
        super(name,salary,age);
        this.language=language
    }
    static multiply(a,b){
        return a*b;
    }
}
let chandan = new programmer("Chandan",101,20,'javaScript');
console.log(chandan);
console.log(chandan.slogan());