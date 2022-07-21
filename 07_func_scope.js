function greet(name="friends"){
    console.log(`Good evening , ${name} 
                    have a nice day`);
        return "live long!";
}
let a = "Amar Nath";
greet(a);
let b = greet();
console.log(b);//return string.

let fun = function() {
    console.log("good evening friends");
}
fun();

let obj={
    'name':'Chandan',
     game:function(){
        return 'takken 3'
    }
}
console.log(obj.game());

/*scope:
let and const have block level scope , but var has function level scope(globle scope)*/

if(1){
    let age=19;
    console.log(age);
}
    //console.log(age); //error
if(1){
    var age=19;
    console.log(age);
}
    console.log(age);
