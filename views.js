var index = require("./routes/index");

function SetupRoutes(app){
    app.use("/", index);
}

module.exports.SetupRoutes = SetupRoutes;