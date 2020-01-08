const express = require("express");
const lessMiddleware = require("less-middleware");
const compression = require("compression");
const enforce  = require("express-sslify");
const chalk = require("chalk");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
const env = process.env.NODE_ENV || "dev";


// ====================
// === App Settings ===
// ====================
app.set("port", process.env.PORT || "8080");
app.set("views", __dirname + "/templates");
app.set("view engine", "pug");

// ==================
// === Middleware ===
// ==================

//* Debug Logging
app.use(morgan("dev"));

//* Compression
app.use(compression());

//* Enforce SSL
if(env == "production")
  app.use(enforce.HTTPS({ trustProtoHeader: true })) 

//* Serve Static Content
app.use(lessMiddleware(__dirname + "/static"));
app.use(express.static(__dirname + "/static"));

// ==============
// === Routes ===
// ==============

//* Main Router
app.use("/", require("./router"));

// * Starts HTTP Server
app.listen(app.get("port"), function(){
  console.log("Server started on port: " + app.get("port"));
});