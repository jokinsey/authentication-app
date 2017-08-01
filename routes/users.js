const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require("passport");
const jwt = require('jsonwebtoken');

//Register
router.post('/register', function(req, res, next){
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, function(err, user){
    if(err){
      res.json({success: false, msg:"Failed to Register user"});
    } else {
      res.json({success: true, msg:"User registered"});
    }
  });
});

//Profile
router.get('/profile', function(req, res, next){
  res.send('PROFILE');
});

//Authentication
router.post('/authenticate', function(req, res, next){
  res.send('AUTHENTICATE');
});


module.exports = router;
