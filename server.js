'use strict';

// imports - node_modules
const http = require('http');
const express = require('./config/express').app();

// config. servidor
const port = 3000;

// servidor http
http.createServer(express).listen(port, () => {
  console.log('Servidor rodando na porta: ' + port);
});
