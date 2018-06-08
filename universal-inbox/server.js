const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const fs = require('fs');
const wav = require('wav');
let upload = multer();
const app = express();
const PORT = process.env.PORT || 3300;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  res.send('hello world');
});   

app.post('/api/kb8', upload.any(), function(req, res) {
    let formData = req.body;
    let files = req.files;
    console.log(formData);
    console.log(req.files);
    console.log(req.file);
    fs.writeFileSync('public/uploads/audiotest.webm', req.files[0].buffer);
    console.log('form data', formData, 'file' , files);
    res.sendStatus(200);
});

app.listen(PORT);