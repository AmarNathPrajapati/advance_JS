// generator generates the value 
// function* is special syntax for generator
function* numbersGen(){
    let i = 0;
    while(i<10){
        yield (i++).toString();
        yield i++;
    }
}
let gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().done);
