var express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();

console.log(process.env.mongodb_url);
mongoose.connect(process.env.mongodb_url).then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.log(error);
  console.log('Error connecting to Mongo');
});

var employeesRouter = require('./api/employee/employee.route');
var usersRouter = require('./api/user/user.route');




app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*')
  next();
});
app.use(express.json());

app.use('/employees', employeesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
