const express = require('express')
const path = require("path");
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const mergePdfs = require('./merging');
const port = 3000
app.use('/static', express.static('mergedFile'))

app.get('/', (req, res) => {
  res.sendFile("templates/index.html",{root:__dirname});
})
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  console.log(req.files);
  let d = await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})