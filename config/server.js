const { getStyledText } = require("../api/utils/getStyledText");

let express = require('express'),    
    bodyParser = require('body-parser'),
    server = express();

require('./db');

server.set("PORT",process.env.PORT || 3000)

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(require('../api/routes'))

server.get("/", (req, rep) => {
  rep.send(getStyledText("Smart Pecera Webapi funcionado"));
});

module.exports = server;


