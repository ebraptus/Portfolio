var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var lessMiddleware = require("less-middleware");
var logger = require("morgan");
var compression = require("compression");
var helmet = require("helmet");

var viewManager = require("./views");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

app.use(compression());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "static")));

viewManager.SetupRoutes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render("404");
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
