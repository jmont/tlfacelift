function init() {

	//useful globals
	//var h = $(window).height();
	var adjusted_h = $(window).height()-$("#tlnav").height();
    
    //sidebar
    var side_elems = ["All Apps", "Most Popular", "Recently Added"];
    displayList("#sidebar", side_elems);

    //stuff to fill grid
    var appfill = "<div class=\"app-unit\">\n \
    <img class=\"app-img\" width=\"75\" height=\"75\"src=\"img/filler.gif\" \
    alt=\"filler.gif\" />\n<h6>Oops...trololol!</h6>\n \
    <h7 class=\"author\">by Unknown</h7> \n </div>";
    
    for(var j=0; j<=2; j++){
    	for(var i=0; i<=2; i++){
    		$("#g-"+i+"-"+j).append(appfill);
    	}
    }
    
    var page_left = "<p id=\"leftarrow\">&lt;</p>"
    var page_right = "<p id=\"rightarrow\">&gt;</p>"
    $("#leftpage").append(page_left);
    $("#rightpage").append(page_right);
    
    //existing code for navbar
    //aka dont touch
    evenOutChildren("#currentColumn");
    
    var navBar = $("#tlnav").clone();
    navBar.attr("id","tlnavBottom");
    var curClass = navBar.attr("class");
    navBar.attr("class",curClass + " visible-phone column");
    $("#content").append(navBar);
}

//my code

function displayList(id, aList) {
	$(id).html("");
	for (i in aList){
			var it = "<p class=\"categoryButton\" onclick=\"0\">" + aList[i] + "</p>";
   			$(id).append(it);
	}
}


//existing js code
//dont touch
function evenOutChildren(divID) {
    var hei = 0;
    $(divID).children().each(function (x) {
        //$(this).attr("top","60%");
    });
}

function sizing() {
    var h = $(window).height() - 2*$("header").height();
    var mar = parseInt($("#content").css("margin-top"),10);
    //var appH = parseInt($("#content").css("margin-top"),10)/3;
    //$("#content").height((h-mar)
    $("#sidebarcol").height((h-(mar/2))+"px");
    //$("#sidebar").height((h-mar)+"px");
    $("#leftpage").height((h-mar)+"px");
    $("#rightpage").height((h-mar)+"px");
    //$(".app-unit").height(appH+"px");

}

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);
