function drawOptions() {
    var options = document.getElementById("options");
    //Run through the prefrences and draw them on the page
    for (var i = 0; i < userPreferences.preferences.length; i++) {
        var cp = userPreferences.preferences[i];
        //Create a Header element
        var header = document.createElement("p");
        var headerText = document.createTextNode(cp.name);
        header.classList.add("header");
        header.appendChild(headerText);
        options.appendChild(header);

        //Create "Buttons" to select Header Options
        var buttons = document.createElement("div");
        for (var k = 0; k < cp.keys.length; k++) {
            var key = cp.keys[k];
            var button = document.createElement("div");
            //Set an ID to later get class value
            button.setAttribute("id", "option_" + i + "_" + k);
            var buttonText = document.createTextNode(key.key);
            button.onclick = function () {
                if (this.className === "button") {
                    this.classList.remove('button');
                    this.classList.add('selected');
                } else {
                    this.classList.remove('selected');
                    this.classList.add('button');
                }
            };
            if (key.selected === true)
                button.classList.add("selected");
            else
                button.classList.add("button");
            button.appendChild(buttonText);
            buttons.appendChild(button);
        }
        options.appendChild(buttons);
    }

    //Create a Save & Play Button
    var postButton = document.createElement("div");
    postButton.classList.add("submit");
    var postButtonText = document.createTextNode("Submit And Play");
    postButton.appendChild(postButtonText);
    postButton.onclick = function () {
        savePreferences();
    };
    options.appendChild(postButton);

}