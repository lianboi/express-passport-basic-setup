var express = require('express');
var router = express.Router();
const auth = require('./auth');
const isAuthenticated = require('../passport/isAuthenticated');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/v0/auth/', auth);

router.get('/authenticated', isAuthenticated, (req, res, next) => {
  res.send('Ok');
});

router.get('/api/v0/token-needed', isAuthenticated, (req, res) => {
  res.send(req.user);
});

router.get('/api/v0/no-token-needed', (req, res) => {
  res.end('Ok');
});


module.exports = router;
