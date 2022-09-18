let greet = () =>{
    console.log("I am greeting with "+this);//here this is indicating object "window";
}
greet();

function greet1(){
    console.log("I am greeting with "+this);//here this is indicating object "window";
}
greet1();
let name = "sonu";
let obj = {
    name:"manoj",
    myfunc: function new_greet(){
        console.log("I am greeting with "+this.name);//now this is indicating object "obj"
    },
    myfunc2:new_greet2 = () =>{
        console.log("I am greeting with "+this.document.body);//here this is indicating object "window";
    }
}
obj.myfunc();
obj.myfunc2();