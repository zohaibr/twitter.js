const express = require('express');
const volleyball = require('volleyball');
const app = express();

app.use(volleyball);

app.get('/', function (req, res){
  res.send('server listening');
});

app.listen(3000);
