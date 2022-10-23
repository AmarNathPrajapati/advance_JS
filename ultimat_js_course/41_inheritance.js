class Animal{
    constructor (name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(`${this.name} is running and color is ${this.color}`);
    }
    shout(){
        console.log(`${this.name} is shouting`);
    }
}
let langoor = new Animal("Vanar","black_white")
langoor.run();
langoor.shout();
class Monkey extends Animal{
    eatBanana(){
        console.log(`hey look! ${this.name} is eating banana and his color is ${this.color}`);
    }
}
let bandar = new Monkey("Monty","Red black");
bandar.eatBanana();