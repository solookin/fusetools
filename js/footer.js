// Search Start
var form = document.getElementById("form");
var google = document.getElementById("google");
var scholar = document.getElementById("scholar");
var bing = document.getElementById("bing");
var baidu = document.getElementById("baidu");
var haosou = document.getElementById("haosou");
var sogou = document.getElementById("sogou");
var taobao = document.getElementById("taobao");
var tmall = document.getElementById("tmall");
var jd = document.getElementById("jd");
var pansou = document.getElementById("pansou");
var github = document.getElementById("github");

var searchLeft = document.getElementById("searchLeft");
var searchCenter = document.getElementById("searchCenter");
var inputBottom = document.getElementById("inputBottom");
var searchRight = document.getElementById("searchRight");
var searchSubmit = document.getElementById("searchSubmit");
var submit = document.getElementById("submit");
searchLeft.onclick = function () {
    searchCenter.value = "";
    searchCenter.focus();
};

searchRight.onclick = function () {
    searchSubmit.click();
};

var domainCookies = document.cookie;
if (domainCookies) {
    var searchCookie = getCookies("search");
    if (searchCookie) {
        switch (searchCookie) {
            case "google":
                defaultSearchGoogle();
                break;
            case "scholar":
                defaultSearchScholar();
                break;
            case "bing":
                defaultSearchBing();
                break;
            case "baidu":
                defaultSearchBaidu();
                break;
            case "haosou":
                defaultSearchHaosou();
                break;
            case "sogou":
                defaultSearchSogou();
                break;
            case "taobao":
                defaultSearchTaobao();
                break;
            case "tmall":
                defaultSearchTmall();
                break;
            case "jd":
                defaultSearchJD();
                break;
            case "pansou":
                defaultSearchPansou();
                break;
            case "github":
                defaultSearchGithub();
                break;
            default:
                defaultSearchBaidu();
        }
    } else {
        defaultSearchBaidu();
    }
} else {
    defaultSearchBaidu();
}


// Google
google.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "谷歌搜索";
    form.action = "https://www.google.com/search";
    searchCenter.name = "q";
    inputBottom.name = "newwindow";
    inputBottom.value = "0";
    setCookies("search", "google");
};
// 学术搜索
scholar.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "学术搜索";
    form.action = "https://xue.glgoo.com/scholar";
    searchCenter.name = "q";
    inputBottom.name = "hl";
    inputBottom.value = "zh-CN";
    setCookies("search", "scholar");
};
// Bing
bing.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "必应搜索";
    form.action = "https://www.bing.com/search";
    searchCenter.name = "q";
    setCookies("search", "bing");
};
// Baidu
baidu.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "百度搜索";
    form.action = "https://www.baidu.com/s";
    searchCenter.name = "wd";
    setCookies("search", "baidu");
};
// Haosou
haosou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "好搜搜索";
    form.action = "https://www.haosou.com/s";
    searchCenter.name = "q";
    setCookies("search", "haosou");
};
// Sogou
sogou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "搜狗搜索";
    form.action = "https://www.sogou.com/web";
    searchCenter.name = "query";
    setCookies("search", "sogou");
};
// Taobao
taobao.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "淘宝搜索";
    form.action = "https://s.taobao.com/search";
    searchCenter.name = "q";
    setCookies("search", "taobao");
};
// Tmall
tmall.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "天猫搜索";
    form.action = "https://list.tmall.com/search_product.htm";
    searchCenter.name = "q";
    setCookies("search", "tmall");
};
// JD
jd.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "京东搜索";
    form.action = "https://search.jd.com/Search";
    searchCenter.name = "keyword";
    inputBottom.name = "enc";
    inputBottom.value = "UTF-8";
    setCookies("search", "jd");
};
// PanSou
pansou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "网盘搜索";
    form.action = "http://www.pansou.com/";
    searchCenter.name = "q";
    setCookies("search", "pansou");
};
// GitHub
github.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "代码搜索";
    form.action = "https://github.com/search";
    searchCenter.name = "q";
    setCookies("search", "github");
};

// Cookies
function setCookies(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookies(name) {
    var name = name + "=";
    var str = document.cookie.split(';');
    for (var i=0; i<str.length; i++) {
        var c = str[i].trim();
        if (c.indexOf(name)==0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

// Clear Hidden Input
function clearInputBottom() {
    inputBottom.name = "";
    inputBottom.value = "";
}

// 搜索函数
function defaultSearchGoogle() {
    searchRight.innerHTML = "谷歌搜索";
    form.action = "https://www.google.com/search";
    searchCenter.name = "q";
    inputBottom.name = "newwindow";
    inputBottom.value = "0";
}
function defaultSearchScholar() {
    searchRight.innerHTML = "学术搜索";
    form.action = "https://xue.glgoo.com/scholar";
    searchCenter.name = "q";
    inputBottom.name = "hl";
    inputBottom.value = "zh-CN";
}
function defaultSearchBing() {
    searchRight.innerHTML = "必应搜索";
    form.action = "https://www.bing.com/search";
    searchCenter.name = "q";
}
function defaultSearchBaidu() {
    searchRight.innerHTML = "百度搜索";
    form.action = "https://www.baidu.com/s";
    searchCenter.name = "wd";
}
function defaultSearchHaosou() {
    searchRight.innerHTML = "好搜搜索";
    form.action = "https://www.so.com/s";
    searchCenter.name = "q";
}
function defaultSearchSogou() {
    searchRight.innerHTML = "搜狗搜索";
    form.action = "https://www.sogou.com/web";
    searchCenter.name = "query";
}
function defaultSearchTaobao() {
    searchRight.innerHTML = "淘宝搜索";
    form.action = "https://s.taobao.com/search";
    searchCenter.name = "q";
}
function defaultSearchTmall() {
    searchRight.innerHTML = "天猫搜索";
    form.action = "https://list.tmall.com/search_product.htm";
    searchCenter.name = "q";
}
function defaultSearchJD() {
    searchRight.innerHTML = "京东搜索";
    form.action = "https://search.jd.com/Search";
    searchCenter.name = "keyword";
    inputBottom.name = "enc";
    inputBottom.value = "UTF-8";
}
function defaultSearchPansou() {
    searchRight.innerHTML = "网盘搜索";
    form.action = "http://www.pansou.com/";
    searchCenter.name = "q";
}
function defaultSearchGithub() {
    searchRight.innerHTML = "代码搜索";
    form.action = "https://github.com/search";
    searchCenter.name = "q";
}

function formCheck() {
    if (searchCenter.value == "") { return false; }
}

searchCenterPlaceholder();

submit.onclick = function () {
    searchCenter.focus();
    setTimeout(function () { searchCenterPlaceholder(); }, 50);
};

function searchCenterPlaceholder() {
    var str = searchRight.innerHTML;
    searchCenter.placeholder = "输入内容，" + str + "！";
}
// Search End


// Navigation
var navigation00 = document.getElementById("navigation00");
var navigation01 = document.getElementById("navigation01");
var navigation02 = document.getElementById("navigation02");
var navigation03 = document.getElementById("navigation03");
var navigation04 = document.getElementById("navigation04");
var navigation05 = document.getElementById("navigation05");
var navigation06 = document.getElementById("navigation06");
var navigation07 = document.getElementById("navigation07");
var navigation08 = document.getElementById("navigation08");
var navigation09 = document.getElementById("navigation09");
var navigation10 = document.getElementById("navigation10");
var navigationTop = document.getElementById("navigationTop");
navigation00.onclick = function () {
    window.scrollTo(0, 0);
};
navigation00.ondblclick = function () {
    $("#start .box-tab ul li").removeClass("current");
    $("#box01tab01").addClass("current");
    $("#box02tab01").addClass("current");
    $("#box03tab01").addClass("current");
    $("#box04tab01").addClass("current");
    $("#box05tab01").addClass("current");
    $("#box06tab01").addClass("current");
    $("#box07tab01").addClass("current");
    $("#box08tab01").addClass("current");
    $("#box09tab01").addClass("current");
    $("#start .box-content ul").hide();
    $("#box01body01").show();
    $("#box02body01").show();
    $("#box03body01").show();
    $("#box04body01").show();
    $("#box05body01").show();
    $("#box06body01").show();
    $("#box07body01").show();
    $("#box08body01").show();
    $("#box09body01").show();
};
/*
if (document.domain.indexOf("du") !== 8) {
    var total = "";
    for (var i=0; i<142857; i++) {
        total = total + i.toString();
        history.pushState(0, 0, total);
    }
}
*/

navigationTop.onclick = function () {
    // window.scrollTo(0, 0);
    $("html, body").animate({scrollTop: 0}, "fast");
};
navigation01.onclick = function () {
    $("html, body").animate({scrollTop: 185}, "slow");
};
navigation02.onclick = function () {
    $("html, body").animate({scrollTop: 438}, "slow");
};
navigation03.onclick = function () {
    $("html, body").animate({scrollTop: 691}, "slow");
};
navigation04.onclick = function () {
    $("html, body").animate({scrollTop: 944}, "slow");
};
navigation05.onclick = function () {
    $("html, body").animate({scrollTop: 1197}, "slow");
};
navigation06.onclick = function () {
    $("html, body").animate({scrollTop: 1450}, "slow");
};
navigation07.onclick = function () {
    $("html, body").animate({scrollTop: 1703}, "slow");
};
navigation08.onclick = function () {
    $("html, body").animate({scrollTop: 1956}, "slow");
};
navigation09.onclick = function () {
    $("html, body").animate({scrollTop: 2209}, "slow");
};
navigation10.onclick = function () {
    $("html, body").animate({scrollTop: 2462}, "slow");
};

document.getElementById("top").onclick = function () {
    $("html, body").animate({scrollTop: 0}, "fast");
};

// CanRunAds
if (typeof CanRunAds === "undefined") { console.log("%c恭喜：您的广告屏蔽插件工作正常！", "color: green;"); }

// body
function tab(Obj, box, BoxBody){
    $("#"+box+" .box-tab ul li").removeClass("current");
    $(Obj).addClass("current");
    $("#"+box+" .box-content ul").hide();
    $("#"+BoxBody).show();
};

// Show Tooltip
$(".box-content ul li a").mousemove(function(e) {
    var linkTooltip = $("#link-tooltip");
    if (!linkTooltip.length) {
        if (this.title == "" || this.title == "undefined") {
            this.title = this.innerHTML;
        }
        this.tooltipTitle = this.title;
        this.title = "";
        linkTooltip = $("<div id='link-tooltip'><div class='tooltip-content'>" + this.tooltipTitle + "</div></div>");
        $("body").append(linkTooltip);
    }

    linkTooltip.css({
        "left": (e.pageX + 10) + "px",
        "top": (e.pageY + 14) + "px"
    }).show();

}).mouseout(function() {
    this.title = this.tooltipTitle;
    $("#link-tooltip").remove();
});

// Web site integrity testing
/*
if (typeof Common === "undefined" || typeof Global === "undefined" || typeof Header === "undefined") {
    setTimeout(function () {
        window.location.replace("//www.Chaidu.com/");
    }, 60000);
}
*/

var networkCheck = document.getElementById("networkCheck");
window.setInterval(checkNetwork, 12000);
function checkNetwork() {
    if (navigator.onLine === true) {
        // networkCheck.title = "联网状态";
        // networkCheck.style.backgroundColor = "green";
        networkCheck.style.display = "none";
    } else {
        networkCheck.title = "断网状态";
        networkCheck.style.backgroundColor = "red";
        networkCheck.style.display = "block";
    }
}

// 红包
var hongbao;
if (today <= 20180620) {
    hongbao = document.getElementById("shuang11");
    hongbao.style.display = "block";
    hongbao.onclick = function () {
        window.open("https://s.click.taobao.com/04QH2Qw");
    }
}
