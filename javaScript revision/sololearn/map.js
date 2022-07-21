// iteration through map is very easy
// it takes an iterable element
// it is a object

let map = new Map([
    ['k1','v1'],['k2','v2']
]);
console.log(map.size);

// some important method in map
map.set('k3','v3').set('k4','v4');// this method set two element
map.set(
    ['k6','v6'],['k5','v5']// set only one element
);
console.log(map);
console.log(map.get('k3'));
console.log(map.has('k4'));
console.log(map.has('v4'));
console.log(map.entries());// it returns array of array with key value pair
for (let kv of map.entries()){
    console.log(kv[0]+":"+kv[1]);
}