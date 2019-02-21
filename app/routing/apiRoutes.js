//LOAD DATA
var friendsData = require("../data/friends");

//ROUTING
module.exports = function(app) {

    //GET REQUEST
    //JSON DATA OF TABLE DISPLAYED WHEN USER VISITS THIS PAGE
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    //POST REQUEST
    //SURVEY INPUT IS SUBMITTED TO THE SERVER AS A JSON OBJECT
    //JSON OBJECT IS PUSHED TO JS ARRAY, SERVER SAVES DATA TO THE SPECIFIED (FRIENDSDATA) ARRAY
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
}