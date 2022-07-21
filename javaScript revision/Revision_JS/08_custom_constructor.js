function generalCar(givenName,givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running with max speed ${this.speed}Kmph`);
    }
}
// constructor helps to create an object
let car1  = new generalCar('Maruti 800',100);
car1.run();