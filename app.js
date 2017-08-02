const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', function(){
  console.log('Connected to database'+ config.database);
});

//On Error
mongoose.connection.on('error', function(err){
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Port Number
const port = 3000;

//Set Static Folder
app.use(express.static(path.join( __dirname, 'public')));

app.use('/users', users);

//Index Route
app.get('/', function(req, res){
  res.send("Invalid Endpoint");
});

//Start Server
app.listen( port, function(){
  console.log("Server started on port" + port);
});
