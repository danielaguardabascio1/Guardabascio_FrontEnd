




var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(express.static('dist'));

//var data = require('./file.json');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('articles.json');
const db = low(adapter);

app.use(bodyParser.json());


app.get('/articles',function(req,res){
    res.setHeader('Content-Type','application/json');
    res.send(db);
});


app.listen(3000,function(){
  console.log("Example");
});
