var express = require("express");
var router = express.Router();

router.get("/404/", function(req, res) {
  res.render("404", {title: "404 Page Not Found"});
})

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

// * Projects
router.get("/projects/mtagsite/", function(req, res){
  res.render("projects/mtagsite", {title: "MTAG Website"})
})

router.get("/projects/kamshooter/", function(req, res){
  res.render("projects/kamshooter", {title: "Kam Shooter"})
})

router.get("/projects/mistem/", function(req, res){
  res.render("projects/mistem", {title: "MiSTEM Website"})
})

router.get("/projects/resanet/", function(req, res){
  res.render("projects/resanet", {title: "Wayne RESA Website"})
})

// * Catch 404 Errors
router.use(function(req, res, next) {
  res.redirect("/404/");
});

module.exports = router;