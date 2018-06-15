'use strict';

// imports - node_modules
const express = require('express');
const session = require('express-session');

// express
const app = express();

// express-session
app.use(session({ secret: 'orange', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}));

// rotas estaticas
app.use('/static', express.static('static'));
app.use('/sites', express.static('sites'));

// rotas dinamicas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/session/information', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>id: ' + req.session.id + '</p>');
  res.write('<p>expira em: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
  res.end();
});

app.get('/session/destroy', (req, res) => {
  res.send(req.session.destroy());
});

// export -> express
exports.app = () => {
  return app;
}
