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
        console.log("data" + friendsData);
        console.log("new" + newFriendData);

        var eachFriendsTotal = 0;
        var friendsTotalArr = [];

        //
        for (var i = 0; i < friendsData.length -1; i++) {
            eachFriendsTotal = 0;
            for (var j = 0; j < 10; j++) {
                eachFriendsTotal += (Math.abs(parseInt(friendsData[i].survey[j]) - parseInt(newFriendData[j])))
                console.log("Each" + eachFriendsTotal);
            }
            friendsTotalArr.push(eachFriendsTotal);
            console.log("Arr" + friendsTotalArr);
        };
        
        //SORTING THE TOTAL DIFFERENCES OF THE FRIENDS INTO ASCENDING ORDER (LOWEST DIFFERENCE AT INDEX 0)
        var sortedFriendMatches = friendsTotalArr.sort(function(a, b){return a - b});
        console.log("sort" + sortedFriendMatches);
        var bestMatch = sortedFriendMatches[0];

        console.log(bestMatch);

        res.json(bestMatch);

    });
}