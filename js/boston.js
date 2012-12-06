// displayList("#topLevel", strList);
// add every string in strList as buttons to #topLevel

//next step: with JQuery, add event listener. So when button is pushed, call a js fucntion

function displayList(divid, strList) {
	$(divid).html("");
	for (i in strList)
		{
			var button = "<a class=\"categoryButton\" onclick=buttonClicked(this)><div class='buttonTxt'>" + strList[i] + "</div></a>";
   			$(divid).append(button);
		}
}

function displayList2(divid, strList) {
	$(divid).html("");
	for (i in strList)
		{
			if (i == 0){
				var button = "<div class=\"categoryHeader\" >" + strList[i] + "</div>";
				}
			else{
			//odds: button light, evens: button dark
			if (i%2 == 0){
				var button = "<a class=\"categoryButtonLight\" onclick=buttonClicked2(this)>" + strList[i] + "</a>";
			}
			else {
				var button = "<a class=\"categoryButtonDark\" onclick=buttonClicked2(this)>" + strList[i] + "</a>";
			}
			}
   			$(divid).append(button);
		}
}

function displayList3(divid, strList) {
	$(divid).html("");
	for (i in strList)
		{
			if (i == 0){
				var button = "<div class=\"categoryHeader\" >" + strList[i] + "</div>";
				}
			else{
			//odds: button light, evens: button dark
			if (i%2 == 0){
				var button = "<a class=\"categoryButtonLight\" onclick=showPopup(this)>" + strList[i] + "</a>";
			}
			else {
				var button = "<a class=\"categoryButtonDark\" onclick=showPopup(this)>" + strList[i] + "</a>";
			}
			}
   			$(divid).append(button);
		}
}


function header(divid, strList) {
	$(divid).html("");
	for (i in strList)
		{
			var button = "<a class=\"categoryButton\" onclick=buttonClicked(this)>" + strList[i] + "</a>";
   			$(divid).append(button);
		}
}


function rmBrown(x){
	$(x).removeClass("brown");
}


function showPopup(button) {
        $("#popupTitle").html($(button).html());
        $("#popupDesc").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis velit vitae lectus imperdiet mattis condimentum vel dolor. Duis placerat mi nibh, id adipiscing neque. Phasellus ac orci nibh, vel sagittis tellus. <br /> Vivamus porta purus eget velit pretium scelerisque. Pellentesque viverra justo vitae est vehicula ultricies. Nullam ipsum tortor, malesuada et fringilla in, gravida at augue. Sed non libero sed nibh feugiat facilisis quis vitae ligula.");
        $('#popupAuthor').html("Post by Taylor Lentz");
        $("#popup").modal();
}



function buttonClicked(but) {
	console.log(but + " was clicked");
	if ($(but).text() == "Student Groups")
	{
		//var x = ["test"];
		//header("#secondHeader", x);
		var test2=["Student Groups", "Awesome" , "Acapella", "Academic", "Community", "Cultural / Religious", "Fraternities","Political", 
			"Greek", "Media", "Miscellaneous", "Pre-Professional", "Programming Board", "Social Programming", "Sororities",
			"Sports / Recreation", "Student Government"];
		displayList2("#secondLevel", test2);
	}
	$("#listingsColumn").removeClass("hidden");
	rmBrown.apply(null, $(".brown"));
	$(but).addClass("brown");
}

function buttonClicked2(but) {
	console.log(but + " was clicked");
	if ($(but).text() == "Acapella")
	{
		var test3=["Acapella", "Anchord", "S-Factor", "Shir Appeal", "sQ!", "Cultural / Religious", "The Ladies of Essence",
			"The Beelzebubs", "Tufts Amalgamates", "Tufts Jaskson Jills"];
		displayList3("#thirdLevel", test3);
	}
	$("#eventsColumn").removeClass("hidden");
	rmBrown.apply(null, $(".brown"));
	$(but).addClass("brown");
}

	
function init() {
    //fill columns using content here
	var test=["Tufts Directory" ,"Student Groups", "Food" ,"Discounts" ,"Student Tools" ];
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

$(window).load(init);
$(document).ready(sizing);
$(window).resize(sizing);
