class Password{
    constructor(){
        console.log("I am a password class constructor");
        this.pass = "";
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let nums = "0123456789";
        let special = "!@#$%^&*("
        if(len<8){
            console.log("your password length is too short");
        }else{
            let i = 0;
            while(i<len){
                this.pass+=chars[Math.floor(Math.random()*chars.length)]
                this.pass+=nums[Math.floor(Math.random()*nums.length)]
                this.pass+=special[Math.floor(Math.random()*special.length)]
                i+=3;
            }
            this.pass=this.pass.slice(0,len);
        }
        return this.pass;
    }
}
let p = new Password();
console.log(p.generatePassword(10));