const express = require("express");
const app = express();
const mysql = require("mysql");
const exphbs = require("express-handlebars");
// ************************************************************

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");







app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});