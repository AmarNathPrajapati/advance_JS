// *******iterator******
// iterator means a function which return a object and can traverse whole element of an array 
//take input as an array
let arr=['Apple','Banana','Payaya','Grapes']
function fruitsIterator(values){
    let nextIndex=0;
    return {
        next:function(){
            if(nextIndex<values.length){
                return{
                    value:values[nextIndex++],
                    done:false
                }
            }else{
                return{
                    done:true
                }
            }
        }
    }
}
let fruits = fruitsIterator(arr); //necessary you can't skip this line
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

