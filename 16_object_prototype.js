// creating constructor
function obj(name,salary){
    this.name=name;
    this.salary=salary;
}
let employee=new obj('Amar Nath',100);
console.log(employee);
// set new prototype in already created constructor
obj.prototype.slogan=function(){
    return this.name;
 }
let slo = employee.slogan();
console.log(slo);
// set a new protype which set newName 
obj.prototype.setName=function(newName){
    this.name=newName;
}
employee.setName('Chandan');
console.log(employee);
//set a new prototype in constructor which provide name
obj.prototype.getName=function(){
    return this.name;
}
let name = employee.getName();
console.log(name);