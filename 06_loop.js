// let i=0;
// while (i<10) {
//     i++;
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// let i=0;
// while (i<10) {
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

let arr = [ 2,4,11,4 ,3,54,3];
arr.forEach(function(i,j,k){ // i->value,j->index,k->array
    console.log(i,j,k);
})
let myobj={
    "first name":"chandan",
    "last name": "Prajapati",
    age: 19,
    arr:[23,24,34,3],
}
for(let key in myobj){
    console.log(myobj[key]);
}