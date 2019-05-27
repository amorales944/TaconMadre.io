const express = require("express");
const exphbs = require("express-handlebars");
// ************************************************************
const app = express();

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");







app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});