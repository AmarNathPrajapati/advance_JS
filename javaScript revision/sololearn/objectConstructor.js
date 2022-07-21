function myObject(name, age ,favColor){  // follow only this syntax
    this.age = age;
    this.favColor = favColor;
    this.name = name
    this.changename = (name) =>{
        this.name =name;
    }
}
// function obj(name , age , color){
//     myAge = age;
//     myName = name;
//     myColor = color;
// }
var p1 = new myObject("Chandan",20,"White");
p1.changename("Amar Nath")
console.log(p1.age);
console.log(p1.name);
// var p2 = new obj("Golu",20,"Green");
// console.log(p2.myage);;
