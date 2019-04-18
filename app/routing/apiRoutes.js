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
    app.post("/api/friends", function(req, res) {

        //JSON OBJECT IS PUSHED TO JS ARRAY, SERVER SAVES DATA TO THE SPECIFIED (FRIENDSDATA) ARRAY
        friendsData.push(req.body);

        //THE LAST SUBMIT IS SET AS THE NEWEST USER (AWAITING COMPARISON)
        var newFriendData = req.body.survey;

        var eachFriendsTotal = 0;
        var friendsTotalArr = [];

        
        for (var i = 0; i < friendsData.length -1; i++) {
            eachFriendsTotal = 0;
            for (var j = 0; j < 10; j++) {
                eachFriendsTotal += (Math.abs(parseInt(friendsData[i].survey[j]) - parseInt(newFriendData[j])))

                //ADDS NEW KEY TO EACH "FRIENDS" OBJECT, TOTALDIF: SET TO THE EACHFRIENDSTOTAL
                friendsData[i].difTotal = parseInt(eachFriendsTotal);
            }

            //EACH OBJECT PUSHED INTO frinedsTotalArr
            friendsTotalArr.push(friendsData[i]);
        };
        
        //SORTING THE OBJECTS IN THE friendsTotalArr BY totalDif KEY, ASCENDING ORDER (INDEX 0 LOWEST)
        var sortedFriendMatches = friendsTotalArr.sort(function (a, b) {
            return parseFloat(a.difTotal) - parseFloat(b.difTotal)
        });
        
        var bestMatch = sortedFriendMatches[0];

        res.json(bestMatch);

    });
}