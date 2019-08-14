var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("home", {title: "Home"});
});

router.get("/projects/", function(req, res){
  res.render("projects", {title: "Projects"})
})

router.get("/skills/", function(req, res){
  res.render("skills", {title: "Skills"})
})

router.get("/languages/", function(req, res){
  res.render("languages", {title: "Languages"})
})

router.get("/toolset/", function(req, res){
  res.render("toolset", {title: "Toolset"})
})

router.get("/education/", function(req, res){
  res.render("education", {title: "Education"})
})

router.get("/contact/", function(req, res){
  res.render("contact", {title: "Contact"})
})

// * Projects
router.get("/projects/portfolio/", function(req, res){
  res.render("projects/portfolio", {title: "Portfolio"})
})

router.get("/projects/mtagsite/", function(req, res){
  res.render("projects/mtagsite", {title: "MTAG Website"})
})

router.get("/projects/kamshooter/", function(req, res){
  res.render("projects/kamshooter", {title: "Kam Shooter"})
})

router.get("/projects/console/", function(req, res){
  res.render("projects/console", {title: "Console"})
})

router.get("/projects/maze/", function(req, res){
  res.render("projects/maze", {title: "Maze Game"})
})

// * Catch 404 Errors
router.use(function(req, res, next) {
  res.render("404");
});

module.exports = router;