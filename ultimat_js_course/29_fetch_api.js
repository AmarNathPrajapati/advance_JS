let fetchData = async() =>{
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-09-10&sortBy=publishedAt&apiKey=6b0466d6e634437d8f46a286a30efe5b";
    let data = await fetch(url);
    let jsonData = await data.json()
    console.log(jsonData);
    document.write(jsonData.articles);
}
fetchData();