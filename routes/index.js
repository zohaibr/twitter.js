const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render('index', {tweets: tweets});
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  res.render('index', {list: list.content});
});

router.use(express.static('public'));

module.exports = router;
