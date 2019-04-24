var functions = require('firebase-functions');
var express   = require('express');
var app = express();

// routes
app.get('/mukhoiran', function(req, res){
  res.send("hi.. we can play backend in firebase");
})

exports.app = functions.https.onRequest(app);
