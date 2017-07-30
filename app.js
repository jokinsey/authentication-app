const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const passport = require ('passport-jwt');
const mongoose = require ('mongoose');

const app = express();

const port = 3000;

app.get('/', function(req, res){
  res.send("Invalid Endpoint");
});

app.listen( port, function(){
  console.log("Server started on port" + port);
});
