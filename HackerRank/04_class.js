class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w*this.h;
}

class Square extends Rectangle{
    constructor(w,h){
        super(w,h)
        this.w = w;
        this.h = w;
    }
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());