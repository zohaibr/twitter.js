const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const tweetBank = require('../tweetBank');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render('index', {tweets: tweets, showForm: true});
});

router.post('/tweets', function (req, res) {
  const name = req.body.name;
  const text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');

});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  console.log(list[0].name);
  res.render('index', {list: list, showForm: true});
});

router.use(express.static('public'));

module.exports = router;
