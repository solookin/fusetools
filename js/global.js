// Global Config
var Global = true;
var Domain = window.location.host;
var Address = window.location.href;
var Referring = document.referrer;
var userAgent = window.navigator.userAgent;

// here !!!
document.oncontextmenu = function () { return true; };
document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode === 123) {
        return false;
    }
};

if (typeof localStorage === "object") {
    var supportLocalStorage = true;
} else {
    var supportLocalStorage = false;
}

/*
if (/\sMSIE\s[5-7]\.\d/.test(userAgent) && Address.indexOf("update.html") === -1 && Referring.indexOf("update.html") === -1) {
    window.location.replace("//www.fusetools.cn/Links/update.html");
}
*/

if (Address.indexOf("//", 9) !== -1 || Address.indexOf("#") !== -1) {
    if (Address.indexOf("target.html") === -1) window.top.location.replace("//www.fusetools.cn/");
}
if (Referring) {
    if (Address.indexOf("Desktop") !== -1) window.top.location.replace("//www.fusetools.cn/");
}

// Random String Function
function randomString(len){
	return '';
	
    var str = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        str += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return str;
}

// Add Script
function addScript(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}

var date = new Date();
var today = date.getFullYear() * 10000 + date.getMonth() * 100 + 100 + date.getDate();

