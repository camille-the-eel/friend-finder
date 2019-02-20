//DEPENDENCY
var path = require("path");

//ROUTING
module.exports = function(app) {

    //HTML GET REQUESTS
    //USER SHOWN THIS CONTENT WHEN VISITING PAGE
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};