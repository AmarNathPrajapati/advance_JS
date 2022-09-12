/**
 * Various loop in javaScript which make like easy
 */
//1. Traditional for loop
let arr = [2,4,6,3,5];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}
//2. forEach loop it takes value , index and array as a argument
arr.forEach((e)=>{
    // console.log(e);
})
//3.Array.from it convert string and object into array.
let shop_name = "lucky Dairy";
let newArr = Array.from(shop_name);
// console.log(newArr);

//4.for of
for( i of arr){
    // console.log(i);
}
//5. for in loop
for(let item in arr ){
    console.log(item);
    console.log(arr[item]);
}