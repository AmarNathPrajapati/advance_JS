//property--->length
//methods--->toUpperCase,toLowerCase
//escape sequence character are not included in the string
//string are inmutable, we can't change the string
//methods are returning new string
let name1 = "Chandan";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.slice(2,4));
console.log(name1.slice(2));
console.log(name1.replace('C',"d"));
let name2 = "    Amar          ";
console.log(name1.concat(name2));
console.log(name2);
console.log(name2.trim());
console.log(name1[0]);
for(val of name1){
    console.log(val);
}
console.log(name1+name2);
console.log(name1.charAt(1));
