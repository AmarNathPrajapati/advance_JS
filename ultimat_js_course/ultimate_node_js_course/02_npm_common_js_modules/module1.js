const hello = () => {
    console.log("Hello Amar");
}
// module.exports = hello; // to send a single module
const ahello = (naam) =>{
    console.log("Hello ",naam);
}
//sending multiple module as an object
module.exports = {hello,ahello};