const express = require('express')
const app = express()
const port = 3000

// cors para permitir requisições de outros domínios
var cors = require('cors')

// multer para upload de arquivos
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cors())

/*
quero fazer uma requisição post que envie um pdf
*/

app.post('/', upload.single('upload'), function (req, res, next) {
  // req.file é um arquivo `avatar`
  // req.body conterá os campos de texto, se houver
  res.json({ message: 'File uploaded successfully', file: req.file });
})

app.get('/', (req, res) => {
  res.json({ message: 'Está rodando' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})