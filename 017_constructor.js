// creating object
let obj={
    name : 'Amar Nath',
    Profession:'student',
    salary:100
}
console.log(obj)
// creating constructor
function data(givenName,givenProfession,givenSalary){
    this.name=givenName;
    this.Profession=givenProfession;
    this.salary=givenSalary;
}
let cons= new data('Amar Nath','student',100);
console.log(cons);
let newCons= new data('Chandan','Student',100)
console.log(newCons);
// accessing data through constructor
console.log(cons.name);
console.log(newCons.name);
console.log(obj.salary);
