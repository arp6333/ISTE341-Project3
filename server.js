var express = require('express'),
  app = express(),
  port = 8080,
  mongoose = require('mongoose'),
  Dept = require('./src/models/departmentModel'),
  Emp = require('./src/models/employeeModel'),
  TC = require('./src/models/timecardModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CompanyServices', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/routes');
routes(app);

app.listen(port);

console.log('RESTful API server listening on: ' + port);