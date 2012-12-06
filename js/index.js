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
                <div id='newsimg' class='crop'><img src='img/park.jpg'></img></div> \
                <div id='newsart'> \
                    <div class='newsTitle'>Somerville to Rebuild its Parks</div> \
                    <div class='newsByline'>by Taylor Lentz</div> \
                    <div class='newsArticle'><p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p><p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. </p><a href='#' class='newsMore'>Read more...</a></div> \
                </div> \
                </div>"

    $("#currentColumn").append(links);
    $("#currentColumn").append(weather);
    $("#currentColumn").append(news);
    
    var ul = "<ul class='listingList'> \
              <li><a onclick='buttonClicked(this, \"listing\")'>Hi really really long one here yes let's see how this works ok</a></li> \
              <li><a onclick='buttonClicked(this, \"listing\")'>Hello ok here goes nothing ok ok</a></li> \
              <li><a onclick='buttonClicked(this, \"listing\")'>Test</a></li> \
              <li><a onclick='buttonClicked(this, \"listing\")'>wow</a></li> \
              <li><a onclick='buttonClicked(this, \"listing\")'>no way</a></li> \
              <li><a onclick='buttonClicked(this, \"listing\")'>Hi</a></li> \
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
    var w = $(window).width();
    if (w > 767) { //Desktop
        var h = $(window).height() - 2*$("header").height();
        var mar = parseInt($("#currentColumn").css("margin-top"),10);
        $("#currentColumn").height((h-mar)+"px");
        $("#listingsColumn").height(h+"px");
        $("#eventsColumn").height(h+"px");
    } else { //Mobile
        $("#currentColumn").height($("#currentColumn").scrollHeight + "px");
        $("#listingsColumn").height($("#listingsColumn").scrollHeight + "px");
        $("#eventsColumn").height($("#eventsColumn").scrollHeight + "px");
    }
}

function buttonClicked(button, type) {
    if (type == 'listing'){
        $("#popupTitle").html($(button).html());
        $("#popupDesc").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis velit vitae lectus imperdiet mattis condimentum vel dolor. Duis placerat mi nibh, id adipiscing neque. Phasellus ac orci nibh, vel sagittis tellus. <br /> Vivamus porta purus eget velit pretium scelerisque. Pellentesque viverra justo vitae est vehicula ultricies. Nullam ipsum tortor, malesuada et fringilla in, gravida at augue. Sed non libero sed nibh feugiat facilisis quis vitae ligula.");
        $('#popupAuthor').html("Post by Taylor Lentz");
        $("#popup").modal();
    }
}

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);

$(document).ready(fixText);
$(window).resize(fixText);
