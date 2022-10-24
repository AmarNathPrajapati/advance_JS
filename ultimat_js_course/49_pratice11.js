/**solution 1,2 and 5
class Complex{
    constructor(realPart, imaginary_part){
        this.realPart = realPart;
        this.imaginary_part = imaginary_part;
    }
    set setReal(realPart){
        this.realPart = realPart;
    }
    set setImg(imgPart){
        this.imaginary_part = imgPart;
    }
    get getReal(){
        return this.realPart;
    }
    get getImg(){
        return this.imaginary_part;
    }
    add(c1){
        let addReal = this.realPart + c1.realPart;
        let addImg = this.imaginary_part + c1.imaginary_part;
        console.log(`Answer is: ${addReal} + ${addImg}i`);
    }   
}
let c1 = new Complex(2,3);
console.log(`${c1.getReal }+ ${c1.imaginary_part}i`);
let c2 = new Complex();
c2.setReal = 4;
c2.setImg = 5;
c1.add(c2);
*/

/** solution 3,4 */
class Human{
    constructor(name,age){
        this.name = name;
        this.age  = age;
        console.log(`Your name is ${this.name} and you are ${this.age} years old`);
    }
    learn(){
        console.log("learning Basics of life");
    }
    eat(){
        console.log("Eating To survive");
    }
}
class student extends Human{
    learn(){
        super.learn();
        console.log("and I am also learning new concepts of programming");
    }
}
let chandan = new student("Amar Nath Prajapati",20);
chandan.learn();
console.log("Is Chandan Instance of Human: "+(chandan instanceof Human));//have to pass object name