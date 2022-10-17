/***
 * set data
 * step1: define options(fetch)
 * step2: define object/data for body
 * step3: post data
 * step4: get response as json
 * step5: get response
 */
/***
 * use async/await rather than .then()
 */
//post data
let fetchPost = async() =>{
    let data ={
        title: 'first Post using json place holder',
        body: 'A post send by A. N. Prajapati',
        userId: 1324,
      }
    let options = {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    let p =await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let response = await p.json()
    return response;
}
let postCall = async() =>{
    let postData = await fetchPost();
    console.log(postData);
}
postCall();
//get data
let fetchGet = async(id)=>{
    let p2 =await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    let response2 =await p2.json()
    return response2
}
let getCall = async()  =>{
    setTimeout(async() => {
        let getData = await fetchGet(101);
        console.log(getData);   
    }, 5000);
}
getCall();