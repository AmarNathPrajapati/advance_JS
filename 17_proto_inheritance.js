// 1.inheritance of Object
//creating a object named "proto"
let proto = {
    slogan: function () {//function in object
        return 'This is the best Company'
    },
    changeName: function (newName) {//constructor in Object
        this.name = newName;
    }
}
// new method to create object
// inheritance of proto
let student = Object.create(proto);
student.name = 'Amar Nath';
student.age = 19;
console.log(student.slogan());
student.changeName("Chandan");
console.log(student);

// old method for inheritance
let student2 = Object.create(proto, {
    name: { value: 'Amar Nath', writable: true },
    age: { value: 19 }
})
console.log(student2);
// 2.inheritance of Constructor
//Creating a constructor named "Employee"
let employee = function (name, salary) {
    this.name = name;
    this.salary = salary;
}
employee.prototype.slogan = function () {
    return `This is the best Company.Regard,${this.name}`;
}
let amar = new employee('Amar Nath',100)
console.log(amar.slogan());
//employee's Inheritance to programmer
function programmer(name,salary,language){
    employee.call(this,name,salary)
    this.language=language;
}
//inheritance of employee function or prototype
programmer.prototype=Object.create(employee.prototype);
programmer.prototype.constructor=programmer;
let chandan= new programmer("Chandan",100,'javaScript');
console.log(chandan);
console.log(chandan.slogan());
console.log(chandan.salary);
console.log(chandan.language);