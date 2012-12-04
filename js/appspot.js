function init() {
    evenOutChildren("#currentColumn");
    
    var navBar = $("#tlnav").clone();
    navBar.attr("id","tlnavBottom");
    var curClass = navBar.attr("class");
    navBar.attr("class",curClass + " visible-phone column");
    $("#content").append(navBar);
    
    //sidebar
    var sidebar = "<ul id=\"sidebar-elems\"> \
					<li class=\"categoryButton\">Most Popular</li> \
					<li class=\"categoryButton\">Recently Added</li> \
				   </ul>";
	$("#sidebar").append(sidebar);
    
    //stuff to fill grid
    var appfill = "<div class=\"app-unit\">\n\
    <img width=\"75\" height=\"75\"src=\"img/filler.gif\" alt=\"filler.gif\" />\
    \n<h6>Oops...trololol!</h6>\n</div>";
    
    for(var j=0; j<=2; j++){
    	for(var i=0; i<=2; i++){
    		$("#g-"+i+"-"+j).append(appfill);
    	}
    }
    
    
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
