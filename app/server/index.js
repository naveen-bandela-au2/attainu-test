var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient;
var data= require('./airports');
var app = express();
app.use(cors())
app.use(bodyParser.json())

var db;

MongoClient.connect("mongodb://localhost:27017/final-tets-i", function (err, client) {
    db = client.db('final-test-i');
                
});



app.get('/gendocs', function(req, resp){
    
   db.collection("airports").insertMany(data.airports, function(err, res) {
    if (err) throw err;
    resp.send("sucessfully inserted the documents" + res.insertedCount)
  });
     
   });


 

app.get('/cities', function(req, res,next){
    db.collection('airports').distinct( "city_name" ,function (err, result){
        if(err)
        {
            throw err;
        }
res.json(result);
    });
   });

   app.get('/airports/:city', function(req, res,next){
    db.collection('airports').find({'city_name':req.params.city}).toArray(function(err, result){
        if(err)
        {
            throw err;
        }
res.json(result);
    });
   });


app.listen(2000);
