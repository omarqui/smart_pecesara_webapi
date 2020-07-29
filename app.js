let dotenv = require('dotenv');
dotenv.config();

let server = require('./config/server')

server.listen(server.get("PORT"));

console.log('SmartPecera API serving on: ' + server.get("PORT"));