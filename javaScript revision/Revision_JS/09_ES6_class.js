// class in JS
class Employee{
    // like C++ this is constructor of Employee Class
    constructor(givenName,givenExp){
        this.name = givenName;
        this.experience = givenExp;
    }
    //add methods to class like C++
    slogan(){
        return `I am ${this.name}, this is the best company of the U.P.`;
    }
    static salary(){
        return "Salary of each employee is 1000";
    }
}
let chandan = new Employee('Amar Nath',5);
// console.log(chandan);
// console.log(chandan.slogan());
// console.log(Employee.salary());//static method invoke without using any object
// now inherite an class programmer using Employee
class Programmer extends Employee{
    constructor(givenName,givenExp,givenlang){
        super(givenName,givenExp);
        this.language = givenlang;
    }
    static multiply(a,b){
        return a*b;
    }
}
let amar = new Programmer('Chandan',2,'javaSricpt');
console.log(amar.slogan())
console.log(amar.name);
console.log(amar.experience);
console.log(amar.language);
console.log(Programmer.multiply(2,3));