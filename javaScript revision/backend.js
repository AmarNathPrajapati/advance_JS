const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buttons and links in CSS</title>
    <style>
        .container{
            border: 2px solid purple;
            background-color: lightgreen;
            width: 55%;
            margin: auto;
            padding: 10px;
        }
        .btn{
            background-color: black;
            color:white;
            padding: 2px;
            margin: 10px;
            border: 2px solid blueviolet;

        }
        a{
            background-color: black;
            color:white;
            padding: 2px;
            text-decoration: none;
            margin: 10px;
        }
        a:hover{
            background-color: rgb(76, 167, 241);
            color: black;
            border: 2px solid blueviolet;
           
        }
        a:active{
            background-color: rgb(88, 255, 88);
            color: black;
             border: 2px solid blueviolet;
        }
        a:visited{
            background-color: darkkhaki;
            color: black;
            border: 2px solid blueviolet;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corrupti, dignissimos esse fugiat blanditiis tenetur sed magnam nulla eum voluptatum odit quidem ea doloribus rerum voluptate incidunt porro, maiores aspernatur et distinctio neque. Culpa possimus dignissimos sit, cum nobis fuga aut repellendus neque veniam earum nisi eum modi, expedita mollitia vero dolore excepturi nostrum accusamus?</p>
        <button class="btn" href ="float_clear.html" >Read More</button>
        <a href="https://amarnathprajapati.github.io/Snake_Game/">Play Snake Game</a>
    </div>

</body>
</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});