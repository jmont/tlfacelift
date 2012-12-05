function init() {
    
    //sidebar
    var side_elems = ["All Apps", "Most Popular", "Recently Added"];
    displayList("#sidebar", side_elems);

    //stuff to fill grid
    var appfill = "<div class=\"app-unit\">\n\
    <img width=\"75\" height=\"75\"src=\"img/filler.gif\" \
    alt=\"filler.gif\" />\n<h6>Oops...trololol!</h6>\n</div>";
    
    for(var j=0; j<=2; j++){
    	for(var i=0; i<=2; i++){
    		$("#g-"+i+"-"+j).append(appfill);
    	}
    }
    
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
			var it = "<a class=\"categoryButton\" onclick=buttonClicked(this)>" + aList[i] + "</a>";
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
    var mar = parseInt($("#currentColumn").css("margin-top"),10);
    $("#currentColumn").height((h-mar)+"px");
    $("#listingsColumn").height(h+"px");
    $("#eventsColumn").height(h+"px");
}

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);
