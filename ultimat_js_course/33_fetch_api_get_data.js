/***
 * get url
 * fetch api
 * get response
 * get data
 * fetch take two parameter, url and option[get, post, put, delete]
 */
let url = "https://dog.ceo/api/breeds/image/random";
let p = fetch(url);
p.then((apnafetch)=>{
    console.log(apnafetch.status);
    console.log(apnafetch.ok);
    console.log(apnafetch.headers);
    return apnafetch.json()
}).then((value)=>{
    console.log(value);
    console.log(value.message);
    let newElement = document.createElement("img");
    newElement.src = value.message;
    document.getElementById("test").append(newElement);
})