let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
//   mongoose = require('mongoose'),
//   Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req,rep)=>{
    rep.send("<h1 style='margin-top:40px;text-align:center; font-family: Arial, sans-serif;'>"+
             "Smart Pecera Webapi funcionado"+
             "</h1>");
});

var routes = require('./api/routes/configuracionRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);