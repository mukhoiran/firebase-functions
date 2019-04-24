var functions = require('firebase-functions');
var express   = require('express');
var cons      = require('consolidate');

var app = express();
app.engine('hbs', cons.handlebars);
app.set('view engine','hbs');
app.set('views','./views');

// routes
app.get('/mukhoiran', function(req, res){
  res.send("hi.. we can play backend in firebase");
})

var forumData = [
    {"title": "How to start?"},
    {"title": "Really confuse, need advice.."}
];

//routes
app.get('/forum', function(req, res){
  res.render('forum', {forums:forumData})
})

exports.app = functions.https.onRequest(app);
