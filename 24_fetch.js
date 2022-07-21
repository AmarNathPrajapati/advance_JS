// fetch is an asynchronous function and always return a promise
/*GET DATA USING FETCH FUNCTION*/
        // function getData(){
        //     url = 'amar.txt';
        //     fetch(url).then((response)=>{
        //         return response.text();
        //     }).then((data)=>{
        //         console.log(data);
        //     })
        // }
        // getData();
function getData(){
    let url = 'https://api.github.com/users';
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getData();

/* POSTDATA USING FECTCH API */
function postdData(){
    let url2 = 'https://dummy.restapiexample.com/api/v1/create';
    let data=`{"name":"testdsgdfsg","salary":"123","age":"23"}	
    `;
    let params = {
        method : 'post',
        headers : {'content-type':'application/JSON'},
        body : data
    }
    fetch(url2,params).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    })
}
postdData();
