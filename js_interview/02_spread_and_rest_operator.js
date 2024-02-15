
/**
 * rest operator in the arr 
 * jisko jo mila vo thik, rest will go to rest operator in the for of array
 * use rest operator in the []
 */
let [a,b,...c]  = [1,2,3,4,5,6,7];
// let [a,b,...c]  = [1,2];
// let [a, b, ...c] = [1];
console.log(a);
console.log(b);
console.log(c);

let arr = [1, 2, 3, 4, 5, 6];
function sum([a, b, ...c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}
sum(arr);

/**
 * spread operator in arr
 * jitane element arr me hai and jitano ki jarurat hai usame spread ho jayega
 */

let arr2 = [1, 2, 3, 4, 5, 6];
function sum(a,b,d,...c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
sum(...arr2);

/******Object destructuring, rest operator */
let company_details = {
    // name:"Fourbrick",
    address:"Noide Sector 16",
    intro:"Best service company",
    Establishment:"2015"
}
/** Object destructring
 *  wahi variable nikalenge jo object me honge.
 *  baki sab rest me chale jayenge.
 *  jaise array me rest operator use karane ke liye [] use karate hai, vaise he object ko distructuring ke liye {} necessary hai.
 *  esase ye pata chal jata hai ki function me object ki kaun kaun si property use ho rahi hai.
 */
function showDetails({name,address,...rest}) {
    console.log("Name: ",name);
    console.log("Address: ",address);
    // console.log("The rest data is", rest);
}
showDetails(company_details)
// showDetails(...company_details) /****** ERROR *********/




/** Spread operator in object */
let newObj = {
    ...company_details,
    name:"Fourbrick Technology"
}
console.log(newObj);