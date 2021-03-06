const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const socketio = require('socket.io');

app.use(volleyball);

//This is the boiler setup for Nunjucks
//App.set is setting the default view engine's extension to HTML.
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const server = app.listen(3000);
const io = socketio.listen(server);

app.use('/', routes(io));
