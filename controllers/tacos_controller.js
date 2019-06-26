const express = require("express");
// require("./models/taco")(app);
// ************************************************************

// Create the `router` for the app, and export the `router` at the end of your file.

module.exports = function (app) {
    app.get("/", function(req, res) {
        // res.send("Welcome to friend finder home")
        // res.sendFile(path.join(__dirname, "../../controllers/tacos_controller.js"));
        res.render("index");
      });
    };