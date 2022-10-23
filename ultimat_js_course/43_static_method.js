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
        Animal.eat();
    }
    static eat(){
        console.log("Every Animal has to eat to survive");
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(`hey look! ${this.name} is eating banana and his color is ${this.color}`);
        Animal.eat();
    }
}
let bandar = new Monkey("Monty","Red black");

// bandar.eat(); error because eat is static method, it is associated with class
Animal.eat();
bandar.shout();
bandar.eatBanana();