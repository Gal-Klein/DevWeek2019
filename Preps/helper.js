var apiHost ="https://developersapi.audioburst.com/v2";
var abAppKey="c2267cf418274ceb95c15ad2fbd212a3";
var userPreferences = null;
var abUserId = null;

window.onload = function () {
    abUserId = localStorage.getItem("abuserid");
    if (abUserId === null) {
        var response = httpAPI(apiHost + "/users/register?externalUserId=devWeek9", "POST", abAppKey, null);
        var abUser = JSON.parse(response);
        abUserId = abUser.ABUserID;
        localStorage.setItem('abuserid', abUserId);
    }
    console.log(abUserId);
    userPreferences = JSON.parse(httpAPI(apiHost + "/user/preferences?userId=" + abUserId, "GET", abAppKey, null));
    drawOptions();
};



