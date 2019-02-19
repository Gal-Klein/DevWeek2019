function savePreferences() {
    for (var i = 0; i < userPreferences.preferences.length; i++) {
        var cp = userPreferences.preferences[i];
        for (var k = 0; k < cp.keys.length; k++) {
            var key = cp.keys[k];
            var elementId = "option_" + i + "_" + k;
            var button = document.getElementById(elementId);
            if (button.className == "button") {
                userPreferences.preferences[i].keys[k].selected = false;
            } else {
                userPreferences.preferences[i].keys[k].selected = true;
            }
        }
    }
    userPreferences = JSON.parse(httpAPI(apiHost + "/user/preferences?userId=" + abUserId, "POST", abAppKey,
        JSON.stringify(userPreferences)));
    playAudio();

}