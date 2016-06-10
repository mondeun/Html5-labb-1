/*
 * Thanks to André Snede Hansen for coming up with this snippet.
 * I have modded it to replace + sign in text to spaces.
 * http://stackoverflow.com/questions/647259/javascript-query-string
 */

// use location search in parameter to acquire url data.
function searchToObject(search) {
    var pairs = search.substring(1).split("&"),
        obj = {}, pair;

    for (var i in pairs) {
        if (pairs[i] === "") continue;
        pair = pairs[i].split("=");
        pair[1] = pair[1].replace(/\+/g, " ");
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
}

function thankUser() {
    alert("Thank you for your input. We will contact you as soon as possible.");
}