let chandan = {
    age: 20,
    siblings:5
}
let amar = {
    name : "Amar Nath Prajapati",
    college: "IIIT Sonepat"
}
let golu = {
    from : "jaunpur U.P."
}
console.log(chandan);
console.log(chandan.age);
chandan.__proto__ = amar;
// chandan.__proto__ = golu; error because you can assing only one proto as object, but chaining is possible
amar.__proto__ = golu;
console.log(chandan.name);
console.log(chandan.from);