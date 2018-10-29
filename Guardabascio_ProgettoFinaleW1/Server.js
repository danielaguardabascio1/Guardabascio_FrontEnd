var express = require('express');

var app = express();

app.use(express.static('dist'));

var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('./articles.json');
var db = low(adapter);


app.get('/articles', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(db);
});

app.listen(3000, function () {
    console.log('Ciao!');
});
