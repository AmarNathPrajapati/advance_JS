class RailwayForm{
    constructor(givenName, trainNo){
        this.name = givenName;
        this.trainNo = trainNo;
    }
    submit(){
        console.log(this.name+ ": Your Form is Submitted and your train number is "+this.trainNo);
    }
    cancel(){
        console.log(this.name+ ": Your Form is cancelled and your train number is "+this.trainNo);
    }
}
let amarForm = new RailwayForm("Amar Nath Prajapati",222002);
amarForm.submit();
let chandanForm = new RailwayForm("Chandan Prajapati",130136);
chandanForm.submit();
chandanForm.cancel();