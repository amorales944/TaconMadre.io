require("connection")(app);




selectAll()
insertOne()
updateOne()




module.exports = function (app) {
    app.get("/survey", function(req, res) {
      // res.send("Welcome to friend finder survey")
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
}