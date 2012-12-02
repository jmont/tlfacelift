// displayList("#topLevel", strList);
// add every string in strList as buttons to #topLevel

//next step: with JQuery, add event listener. So when button is pushed, call a js fucntion
function displayList(divid, strList) {
	for (i in strList)
		{
			var button = "<a class=\"categoryButton\" onclick=buttonClicked(this)>" + strList[i] + "</a>"
   			$(divid).append(button);
		}
}

function buttonClicked(but) {
	console.log(but + " was clicked");
	if ($(but).text() == "hello")
	{
		var test2=["goodbye" , "everyone"];
		displayList("#listingsColumn", test2);
	}
	$("#listingsColumn").removeClass("hidden");
}
	
function init() {
    //fill columns using content here
	var test=["hello" , "world"];
	displayList("#topLevel", test);
	//var test2=["goodbye" , "everyone"];
	//displayList("#listingsColumn", test2)
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
