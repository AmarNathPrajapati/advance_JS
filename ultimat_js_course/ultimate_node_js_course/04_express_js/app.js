const express = require('express');
const path = require("path");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./home.html",{root:__dirname})//simple method to render a file
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,"./about.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile("./contact.html",{root:__dirname})
})
app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname,"./service.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})