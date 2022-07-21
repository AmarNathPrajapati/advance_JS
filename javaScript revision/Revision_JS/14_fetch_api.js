
const getData = () =>{
    // url = 'amar.txt'
    url = 'chandan.json'
    console.log('step2');
    return fetch(url).then((resolve)=>{
        console.log('step4');
        return resolve.json();
    }).then((data)=>{
        console.log('step5');
        console.log(data);
    })
}
console.log('step1');
getData();
console.log('step3');
//step 1
//step 2
//step 3
//step 4
//step 5