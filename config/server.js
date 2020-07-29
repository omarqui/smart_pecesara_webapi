let express = require('express'),    
    bodyParser = require('body-parser'),
    server = express();

require('./db');

server.set("PORT",process.env.PORT || 3000)

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(require('../api/routes'))

server.get("/", (req, rep) => {
  rep.send("<h1 style='margin-top:40px;text-align:center; font-family: Arial, sans-serif;'>" +
    "Smart Pecera Webapi funcionado" +
    "</h1>");
});

module.exports = server;