var express = require("express");
var router = express.Router();

router.get("/sitemap.xml", function (req, res){
  res.type("text/xml");
  res.sendFile(__dirname + "/static_meta/sitemap.xml")
});

router.get("/robots.txt", function (req, res){
  res.type("text/txt");
  res.sendFile(__dirname + "/static_meta/robots.txt")
});

router.get(["/", "/home/"], function (req, res) {
  res.render("home", { title: "Home" });
});

router.get("/projects/", function (req, res) {
  res.render("projects", { title: "Projects" })
});

router.get("/skills/", function (req, res) {
  res.render("skills", { title: "Skills" })
});

router.get("/languages/", function (req, res) {
  res.render("languages", { title: "Languages" })
});

router.get("/toolset/", function (req, res) {
  res.render("toolset", { title: "Toolset" })
});

router.get("/education/", function (req, res) {
  res.render("education", { title: "Education" })
});

router.get("/projects/mtagsite/", function (req, res) {
  res.render("projects/mtagsite", { title: "MTAG Website" })
});

router.get("/projects/mistem/", function (req, res) {
  res.render("projects/mistem", { title: "MiSTEM Website" })
});

router.get("/projects/resanet/", function (req, res) {
  res.render("projects/resanet", { title: "Wayne RESA Website" })
});

router.get("/projects/colessentials/", function (req, res) {
  res.render("projects/colessentials", { title: "Continuity of Learning Essentials" })
});

// * Catch 404 Errors
router.use(function (req, res, next) {
  res.status(404);
  res.render("404", { title: "404 Page not found!" })
});

module.exports = router;