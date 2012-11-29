function init() {
    //fill columns using content here
    var tickets = "<a class=\"categoryButton\">Tickets</a>"
    var music = "<a class=\"categoryButton\">Music</a>"
    var events = "<div class=\"contentBox\" id=\"events\">Events</div>"
    var transportaion = "<div class=\"contentBox\" id=\"transportation\">Transportation</div>"
    $("#topLevel").append(tickets);
    $("#topLevel").append(music);
    
    var title = "<div class=\"title bold\">LISTINGS</div>"
    var campus = "<div class=\"contentBox\" id=\"campus\">Campus</div>"
    var sublets = "<div class=\"contentBox\" id=\"sublets\">Sublets</div>"
    var jobs = "<div class=\"contentBox\" id=\"jobs\">Jobs</div>"
    $("#listingsColumn").append(title);
    $("#listingsColumn").append(campus);
    $("#listingsColumn").append(sublets);
    $("#listingsColumn").append(jobs);
    
    title = "<div class=\"title bold\">EVENTS</div>"
    var today = "<div class=\"contentBox\" id=\"today\">Today</div>"
    var tomorrow = "<div class=\"contentBox\" id=\"tomorrow\">Tomorrow</div>"
    $("#eventsColumn").append(title);
    $("#eventsColumn").append(today);
    $("#eventsColumn").append(tomorrow);
    
    evenOutChildren("#currentColumn");
    
    var navBar = $("#tlnav").clone();
    navBar.attr("id","tlnavBottom");
    var curClass = navBar.attr("class");
    navBar.attr("class",curClass + " visible-phone column");
    $("#content").append(navBar);
    
}

function evenOutChildren(divID) {
    var hei = 0;
    $(divID).children().each(function (x) {
        //$(this).attr("top","60%");
    });
}

function sizing() {
    var h = $(window).height() - 2*$("header").height();
    var mar = parseInt($("#currentColumn").css("margin-top"),10);
    $("#currentColumn").height((h-mar)+"px");
    $("#listingsColumn").height(h+"px");
    $("#eventsColumn").height(h+"px");
}

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);
