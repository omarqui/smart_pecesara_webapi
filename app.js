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
    rep.send("Smart Pecera Webapi");
});

var routes = require('./api/routes/configuracionRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);