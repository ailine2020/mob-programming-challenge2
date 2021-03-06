require("dotenv").config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require("hbs");
const app = express();


// connexion db
require("./config/mongo");

// config des views
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// config du moteur de template
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");


// config des routers
app.use(require("./routes/index"));
app.use(require("./routes/users"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
