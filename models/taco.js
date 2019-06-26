require("./config/orm")(app);
// ************************************************************

// Also inside `taco.js`, create the code that will call the ORM functions using taco specific input for the ORM.
// Export at the end of the `taco.js` file.




module.exports = function (app) {
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "./controllers/tacos_controller"));
      });
    };