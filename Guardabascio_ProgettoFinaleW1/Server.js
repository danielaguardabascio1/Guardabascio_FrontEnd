var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var jsonParser = bodyParser.json();
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('./articles.json');
var db = low(adapter);




app.use(express.static('dist'));

app.use(express.json());

app.use(bodyParser.json());

function loadJson(app) {
    app.get('/articles', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(db);
    });
}

loadJson(app);

// Add a article
app.post('/articolo', function (req, res) {
    db.get('articles').push(req.body)
        .write()
})

app.post('/likebutton', function (req, res) {

    var valB = req.body.valueCl;
    var idB = req.body.idClass;
    db.get('articles')
        .find({  id: idB})
        .assign({ like: valB })
        .write();
    loadJson();
});


app.listen(3000, function () {
    console.log('Ciao!');
});


/*
{ id: "5" , title: 'Article Title 5', image: 'https://cdn-images-1.medium.com/max/1600/1*G-7CdUg5R87vwhPAGOLMug.gif' , tech : 'tech' , text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra at elit nec pretium. In pellentesque elementum porta. In sollicitudin orci vitae nisl fringilla vulputate. Ut rutrum elit sed risus eleifend efficitur. Integer leo nisi, finibus sed mi nec, varius blandit dolor. Suspendisse varius nisl ac viverra vestibulum. Donec mattis aliquam nibh, et viverra ipsum ultricies vitae' , like: 'true'}
*/
