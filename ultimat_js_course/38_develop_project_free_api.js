//fetch data
let url = "https://kontests.net/api/v1/all";
let data = fetch(url);
//observe data
data.then((response)=>{
    return response.json()
}).then((contest)=>{
    console.log(contest);//array of object
    let ContestItems = "";
    contest.forEach(element => {
 //get useful data 
        // console.log(element);//object
        // console.log(element.name);
        // console.log(element.url);
//creat card
        ContestItems += `<div class="col-md-4 my-3">
        <div class="card" style="width: 18rem;">
            <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/689299/0211_JavaScript-Coding-Challenge_Luke-Newsletter-30e54141c87b90ab38ee5aa3517849c3.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="${element.url}" class="btn btn-primary">Visit Contest</a>
            </div>
          </div>
    </div>` ;
    document.getElementById("contestItem").innerHTML = ContestItems;
    });
})
//add card