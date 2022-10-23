class Animal{
    constructor (name, color){
        this.realName = name;
        this.color = color;
    }
    set name(newName){
        this.realName = newName;
    }
    get name(){
        return this.realName;
    }
    run(){
        console.log(`${this.name} is running and color is ${this.color}`);
    }
    shout(){
        console.log(`${this.name} is shouting`);
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(`hey look! ${this.name} is eating banana and his color is ${this.color}`);
    }
}
let bandar = new Monkey("Monty","Red black");
bandar.name = "Motu";//methods are act as property
console.log(bandar.name);
console.log(bandar instanceof Animal);
let Golu = "Boy";
console.log(Golu instanceof Monkey);
console.log(bandar instanceof Monkey);