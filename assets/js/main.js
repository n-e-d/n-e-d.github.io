var sites = document.getElementById("sites");
var nedhome = "n-e-d.github.io";

function b(type, name, url) {
    "use strict";
    var image = name.toString().replace(" ", "-").replace("$", "money").toLowerCase();
    var text = '<a href="http://' + url + '" class="' + type + ' button">' + name + "<br>" + '<small class="small">' + type + "</small><br>" + '<img src="assets/images/' + type.toString().toLowerCase() + "/" + image + '.png" alt="' + name + '" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

function bJS(type, name, jsCode) {
    "use strict";
    var image = name.toString().replace(new RegExp(" ", 'g'), "-").toLowerCase();
    var text = '<a href="javascript:open(\'' + jsCode + '\');" class="' + type + ' button">' + name + "<br>" + '<small class="small">' + type + "</small><br>" + '<img src="assets/images/' + type.toString().toLowerCase() + "/" + image + '.png" alt="' + name + '" width="70" height="55">' + "</a>";

    document.getElementById("sites").innerHTML = document.getElementById("sites").innerHTML + text;
}

/* Catagory: NedApp/NedTools */
sites.innerHTML = sites.innerHTML + "<br>";
// Replaced on main screen: bJS("NedApp", "Calculator", "calc");
// Replaced on main screen: b("NedApp", "Clock", nedhome + "/tools/clock");
b("NedApp", "$ Converter", nedhome + "/tools/moneyconverter");
b("NedApp", "Holidays", nedhome + "/tools/holidays");
b("NedApp", "Radio", nedhome + "/tools/radio");
bJS("NedApp", "Tv", "tv");
bJS("NedApp", "Piano", "piano");
bJS("NedApp", "Translator", "translator");
bJS("NedApp", "QR code creator", "qrgen");
// Replaced on main screen: bJS("NedApp", "URL Shortner", "urlshort");

/* Catagory: SocialMedia */
sites.innerHTML = sites.innerHTML + "<br>";
b("SocialMedia", "Facebook", "facebook.com");
b("SocialMedia", "Twitter", "twitter.com");
b("SocialMedia", "Youtube", "youtube.com");
b("SocialMedia", "Flickr", "flickr.com");
b("SocialMedia", "Google+", "plus.google.com");
b("SocialMedia", "Imgur", "imgur.com");
b("SocialMedia", "Yahoo A.", "answers.yahoo.com");
b("SocialMedia", "Snapchat", "snapchat.com");
b("SocialMedia", "Instagram", "instagram.com");

/* Catagory: Kids */
sites.innerHTML = sites.innerHTML + "<br>";
b("Kids", "Disney", "disney.com");
b("Kids", "Nick", "nick.com");
b("Kids", "CN", "cartoonnetwork.com");
b("Kids", "GamesFreak", "gamesfreak.net");
b("Kids", "Minecraft", "www.minecraft.net");
b("Kids", "PBS", "pbskids.org");
b("Kids", "CoolMath", "www.coolmath-games.com");
b("Kids", "Poptropica", "www.poptropica.com");
b("Kids", "FunBrain", "www.funbrain.com");
b("Kids", "Pogo", "pogo.com");

/* Catagory: Outher */
sites.innerHTML = sites.innerHTML + "<br>";
b("Outher", "Weebly", "weebly.com");
b("Outher", "CCleaner", "ccleaner.com");
b("Outher", "Microsoft", "microsoft.com");
b("Outher", "Wikipedia", "wikipedia.org");
b("Outher", "GitHub", "github.com");
b("Outher", "Netflix", "netflix.com");
b("Outher", "eBay", "ebay.com");
b("Outher", "ZunoZap", "zunozap.github.io");

/* Catagory: Email */
sites.innerHTML = sites.innerHTML + "<br>";
b("Email", "Gmail", "gmail.com");
b("Email", "Yahoo Mail", "yahoo.com");
b("Email", "Outlook", "outlook.com");

function showHide(type) {
    "use strict";
    var x = document.getElementsByClassName(type);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display == "none") {
            x[i].style.display = "inline-block";
        } else {
            x[i].style.display = "none";
        }
    }
}

function switchSearch(name, url, a) {
    document.getElementById("web-search").action = url;
    document.getElementById("WS-TXT").name = a;
}
function setCookie(cname, cvalue) {
    "use strict";
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cook) {
    var user = getCookie(cook);
    if (user != "") {
        return true;
    } else {
       return false;
    }
    return false;
}

function switchS(name, url, a){
    setCookie("searchone", name);
    setCookie("searchtwo", url);
    setCookie("searchthree", a);
    switchSearch(name, url, a);
}

function open(menu) {
    document.getElementById(menu).style.display = "inline-block";
}

if (window.location.href.toString().includes("nedhome")){
    document.getElementById("infobar").style.display = "block";
}

if (window.innerWidth < 600) {
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.padding = "3px 2px";
    }
}

function advancedsearch(tagname) {
    if (getCookie("advancedsearch").toString().includes("disable")) {
        searchbar(true);
        document.getElementById("ase").style.display = "none";
        document.getElementById("asd").style.display = "inline-block";
        document.getElementById("advancedsearche").style.display = "inline-block";
        setCookie("advancedsearch", "enabled");
    } else {
        document.getElementById("nocook").style.display = "inline-block";
        document.getElementById("nhcooke").style.display = "none";
        document.getElementById("asd").style.display = "none";
        document.getElementById("ase").style.display = "inline-block";
        document.getElementById("advancedsearche").style.display = "none";
        setCookie("advancedsearch", "disabled");
    }
}

function searchbar(startup){
    if (getCookie("advancedsearch").toString().includes("enable") || startup || window.location.protocol == "file:") {
        document.getElementById("nocook").style.display = "none";
        document.getElementById("nhcooke").style.display = "inline-block";
        if (checkCookie("searchone")) {
            switchSearch(getCookie("searchone"), getCookie("searchtwo"), getCookie("searchthree"));
        }
    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var pmAm = amOrPm(h);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mon = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    h = twelvehour(h);
    m = checkTime(m);
    document.getElementById('theTime').innerHTML = days[today.getDay()] + ", " + mon[today.getMonth()] + " " + today.getDate() + ", " + h + ":" + m + " " + pmAm;
    var t = setTimeout(startTime, 500);
}

function amOrPm(i) {
    if (i > 12) {return "PM"};
    return "AM";
}

function twelvehour(i) {
    if (i > 12) { i = i - 12};
    return i;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

if (!checkCookie("advancedsearch")) {
    setCookie("advancedsearch", "enabled");
}

searchbar(false);
