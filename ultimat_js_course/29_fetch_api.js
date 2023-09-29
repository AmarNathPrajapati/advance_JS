// let fetchData = async() =>{
//     let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-09-10&sortBy=publishedAt&apiKey=6b0466d6e634437d8f46a286a30efe5b";
//     let data = await fetch(url);
//     let jsonData = await data.json()
//     console.log(jsonData);
//     document.write(jsonData.articles);
// }
// fetchData();
const url = 'https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '490a9b76aemshdca0b9fb6bfb1c5p1d4fd9jsnc2079e771940',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

let fetchData = async() =>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
