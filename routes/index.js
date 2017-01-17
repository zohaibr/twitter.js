const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const tweetBank = require('../tweetBank');

module.exports = function (io) {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());


  router.get('/', function(req, res) {
    let tweets = tweetBank.list();
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
    console.log(name);
    res.render('index', {list: list, name: name, showForm: true});
  });

  router.use(express.static('public'));

  return router;
};
