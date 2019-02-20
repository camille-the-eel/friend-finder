//DEPENDENCIES
var express = require("express");

//CONFIG
var app = express();
const PORT = process.env.PORT || 8080;

//DATA PARSING WITH MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTING
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//SERVER START-UP
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});