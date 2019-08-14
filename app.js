const express = require("express");
const lessMiddleware = require("less-middleware");
const compression = require("compression");
const mainRouter = require("./router");

const app = express();

// * Sets up the view engine and views directory
app.set("views", __dirname + "/templates");
app.set("view engine", "pug");

// * Set up middleware
app.use(compression()); // * Compresses all content

// * Serves static content with LESS Middleware
app.use(lessMiddleware(__dirname + "/static"));
app.use(express.static(__dirname + "/static"));

// * Sets up all the views
app.use(mainRouter);

// * Starts HTTP Server
const port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("Server started on port: " + port);
});