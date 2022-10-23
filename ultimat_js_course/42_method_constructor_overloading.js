class Animal{
    constructor (name, color){
        this.name = name;
        this.color = color;
        console.log("Mai Animal class ka constructor hoon");
    }
    run(){
        console.log(`${this.name} is running and color is ${this.color}`);
    }
    shout(){
        console.log(`${this.name} is shouting`);
    }
}

class Monkey extends Animal{
    //by default constructor added by javaScript
    // constructor(...args){
    //     super(...args);
    // }
    //constructor overloading
    constructor(name,color,height){
        //jab tak super keyword use nahi hoga,tab tak you can't use keyword this.
        super(name,color);
        this.height = height;
    }
    eatBanana(){
        console.log(`hey look! ${this.name} is eating banana and his color is ${this.color}`);
    }
    //method overriding
    shout(){
        console.log("Monkey is shouting more than ohter Animal");
    }
    //method overloading
    run(){
        super.run();
        console.log("Monkey runs fast than other Animal");
    }
    about(){
        console.log(`The name of monkey is ${this.name}, his color is ${this.color} and his height is ${this.height} foots`);
    }
}


// let langoor = new Animal("Vanar","black_white")
// langoor.run();
// langoor.shout();
let bandar = new Monkey("Monty","Red black",5);
bandar.shout();
bandar.run();
bandar.about();