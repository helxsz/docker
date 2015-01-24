console.log("hello log");
/*
var express = require('express');

console.log("hello log");

var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

//app.set('trust proxy', 'loopback') 
app.listen(3000);


var redisClient = require('redis').createClient(6379,'localhost');
redisClient.on('connect',function(err){
   console.log('connect redis');
})
*/
/**/


var express = require('express'),
    app = express(),
    redis = require('redis'),
    mongoose = require('mongoose'),
    server = require('http').createServer(app);



var opts = { server: { auto_reconnect: false,poolSize: 10 }, user: '', pass: '',replset: { strategy: 'ping', rs_name: 'testSet' } };
mongoose.connect('mongodb://localhost/food_production',opts,function(err){
  if(err) { 
      console.log('connect mongodb error'+" "+err.name+" "+ err.errmsg);
    if(err.name == 'MongoError' && err.code == 18 && err.errmsg == 'auth fails'){
         
    }else{
    } 
  }
  else console.log('mongodb connect success');
});

mongoose.connection.on('open', function (err) {
      console.log('connection opening');
});



var redisClient = require('redis').createClient(6379,'localhost');
redisClient.on('connect',function(err){
   console.log('connect redis');
})



app.get('/', function(req, res) {
  res.json({
    status: "ok test4"
  });
});

var port = process.env.HTTP_PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
