
function httpAPI(url, method, key, post) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(method, url, false); // false for synchronous request
    xmlHttp.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    xmlHttp.send(post);
    return xmlHttp.responseText;
}