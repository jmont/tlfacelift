function init() {
    //fill columns using content here
    var links = "<div class=\"contentBox\" id=\"links\">Links</div>"
    var weather = "<div class=\"contentBox\" id=\"weather\">Weather</div>"
    var news = "<div class=\"contentBox\" id=\"news\">News</div>"
    $("#currentColumn").append(links);
    $("#currentColumn").append(weather);
    $("#currentColumn").append(news);
    
    var title = "<div class=\"title\">LISTINGS</div>"
    var campus = "<div class=\"contentBox\" id=\"campus\">Campus</div>"
    var sublets = "<div class=\"contentBox\" id=\"sublets\">Sublets</div>"
    var jobs = "<div class=\"contentBox\" id=\"jobs\">Jobs</div>"
    $("#listingsColumn").append(title);
    $("#listingsColumn").append(campus);
    $("#listingsColumn").append(sublets);
    $("#listingsColumn").append(jobs);
    
    title = "<div class=\"title\">EVENTS</div>"
    var today = "<div class=\"contentBox\" id=\"today\">Today</div>"
    var tomorrow = "<div class=\"contentBox\" id=\"tomorrow\">Tomorrow</div>"
    $("#eventsColumn").append(title);
    $("#eventsColumn").append(today);
    $("#eventsColumn").append(tomorrow);
    
    evenOutChildren("#currentColumn");
}

function evenOutChildren(divID) {
    var hei = 0;
    $(divID).children().each(function (x) {
        //$(this).attr("top","60%");
    });
}

function sizing() {
    var h = $(window).height() - $("header").height();
    $("#currentColumn").height(h+"px");
    $("#listingsColumn").height(h+"px");
    $("#eventsColumn").height(h+"px");
    

}

$(document).ready(sizing);
$(window).resize(sizing);
$(window).load(init);
