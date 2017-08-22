var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('hello world');
})

// to run the server
app.listen('3000',function(){
  console.info('running at 3000');
})
