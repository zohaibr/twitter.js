const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();

app.use(volleyball);

//We are defining what to render with nunjucks with the below object
const locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

//This is the boiler setup for Nunjucks
//App.set is setting the default view engine's extension to HTML.
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

//Below renders to index.html in the views folder.
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});


app.get('/views', function (req, res){
  res.render('index', locals, function(err, html) {
    if (err) console.log(err);
    res.send(html);
  });
});

app.listen(3001);
