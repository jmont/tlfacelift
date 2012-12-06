function init() {
    //fill columns using content here
    
    var links = "<div class='contentBox' id='links'><div class='boxTitle'>Links</div> \
                 <table id='linkGrid'> \
                    <tr> <td>Tufts Email</td><td>Trunk</td> </tr> \
                    <tr> <td>SIS</td><td>Webcenter</td> </tr> \
                 </table></div>"
    var weather = "<div class=\"contentBox\" id=\"weather\"><div class=\"boxTitle\">Weather</div> \
                   <div id='weatherImgDiv'><img src='img/nightrain.svg'></img></div> \
                   <div id='weatherInfo'><p>Tropical Storm<br />80 F / 70 F</p></div> \
                   </div>"

    var news = "<div class=\"contentBox\" id=\"news\"><div class=\"boxTitle\">News</div> \
                <div id='newsimg' class='crop'> \
                <img src='img/park.jpg'></img> \
                </div> \
                </div>"

    $("#currentColumn").append(links);
    $("#currentColumn").append(weather);
    $("#currentColumn").append(news);
    
    var ul = "<ul class='listingList'> \
              <li>Hi really really long one here yes let's see how this works ok </li> \
              <li>Hello ok here goes nothing ok ok</li> \
              <li>Test</li> \
              <li>wow</li> \
              <li>no way</li> \
              <li>Hi</li> \
              <li class='showMore'>Show more listings...</li> \
              </ul>"

    var title = "<div class='title bold'>LISTINGS</div>"
    var campus = "<div class='contentBox' id='campus'><div class='boxTitle'>Campus</div></div>"
    var sublets = "<div class='contentBox' id='sublets'><div class='boxTitle'>Sublets</div></div>"
    var jobs = "<div class='contentBox' id='jobs'><div class='boxTitle'>Jobs</div></div>"
    $("#listingsColumn").append(title);
    $("#listingsColumn").append(campus);
    $("#campus").append(ul);
    $("#listingsColumn").append(sublets);
    $("#sublets").append(ul);
    $("#listingsColumn").append(jobs);
    $("#jobs").append(ul);
    
    var ul = "<ul class=\"eventsList\"> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today yay wow hyay wow hyay wow hyay wow hyay wow hyay wow hyay wow how are we goint to fo</div></div></li> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today </div></div></li> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today </div></div></li> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today </div></div></li> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today </div></div></li> \
              <li><div class='eventContainer'><div class=\"eventDate\">7:00 pm</div><div class=\"eventText\">ACM Meeting Today </div></div></li> \
              </ul>"

    title = "<div class=\"title bold\">EVENTS</div>"
    var today = "<div class=\"contentBox\" id=\"today\"><div class=\"boxTitle\">Today</div></div>"
    var tomorrow = "<div class=\"contentBox\" id=\"tomorrow\"><div class=\"boxTitle\">Tomorrow</div></div>"
    $("#eventsColumn").append(title);
    $("#eventsColumn").append(today);
    $("#today").append(ul);
    $("#eventsColumn").append(tomorrow);
    $("#tomorrow").append(ul);

    alternateColor(".eventContainer");
    fixText();

    evenOutChildren("#currentColumn");

    mkBottomMenu();    
}

function fixText() {
    $(".eventText").ellipsis();
    //filter listingList to not ellpise show more
    var listings = $(".listingList li");
    for (var i = 0; i < listings.length; i++) {
        if ($(listings[i]).attr("class") != "showMore")
            $(listings[i]).ellipsis();
    }
}

function alternateColor(divc) {
    var divs = $(divc);
    var flag = false;
    for (var i = 0; i < divs.length; i++) {
        if (flag) $(divs[i]).addClass("everyOther");
        flag = !flag;
    }
}

function mkBottomMenu() {
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
//$(window).resize(sizing);

$(document).ready(fixText);
$(window).resize(fixText);
