const express = require('express');
const router = express.Router();

//Register
router.get('/register', function(req, res, next){
  res.send('REGISTER');
});

//Profile
router.get('/profile', function(req, res, next){
  res.send('PROFILE');
});

//Authentication
router.post('/authenticate', function(req, res, next){
  res.send('AUTHENTICATE');
});

//Validate
router.get('/validate', function(req, res, next){
  res.send('VALIDATE');
});




module.exports = router;
