const express = require('express')
const app = express()
const port = 3000
const path =require("path")
const multer  = require('multer')
const { mergerpdfs } = require('./merge')
const upload = multer({ dest: 'uploads/' })

app.use('/static', express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files)
    let d = await mergerpdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/public/${d}.pdf`)
  })
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})