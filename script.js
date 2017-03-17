$(document).ready(function () {
	// var initialize
	var wctext = $("#wctext");
	var welcome = $("#welcome");
	var left = $("#left");
	var right = $("#right");
	var middle = $("#middle");
	var aboutmebtn = $("#aboutme-btn");
	var worksbtn = $("#works-btn");
	var logo = $("#logo");
	var logobtn = $("#logo-btn");
	var body = $("body");
	var worksLink = $("#works > a");
	var workHover = $("#works > a > div");

	// welcome display
	function welcomedp() {
		var text = 'System.out.print("Welcome!");';
		wctext.html(text).addClass("seen").removeClass("fade");
	};
	welcomedp();
	setTimeout(function() {
		welcome.addClass("closewelcome").removeClass("initwelcome");
	}, 2500);
	setTimeout(function() {
		welcome.addClass("nodisplay").removeClass("flex");
	}, 3500);

	// close warning
	$("#closewarn").on("click", function() {
		$("#warning").removeClass("flexwarn").addClass("nodisplay");
	});

	function click(btn) {
		var shrink = (btn == aboutmebtn ? right : left);
		var grow = (btn == aboutmebtn ? left : right);
		var fade = (btn == aboutmebtn ? aboutmebtn : worksbtn);
		var show = (btn == aboutmebtn ? worksbtn : aboutmebtn);
		var midplace = (btn == aboutmebtn ? "place-right" : "place-left");
		shrink.addClass("shrink fade").removeClass("overflow rewidth normal-view large-view seen");
		middle.removeClass("place-mid place-left place-right").addClass(midplace);
		grow.addClass("overflow rewidth large-view seen").removeClass("shrink fade");
		body.addClass("bodybg");
		logo.addClass("invert");
		fade.addClass("fade").removeClass("invert seen").prop("disabled", true);
		show.addClass("invert seen").prop("disabled", false);
	}

	// click about me
	aboutmebtn.on("click", function() {
		click(aboutmebtn);
	});

	// click works
	worksbtn.on("click", function() {
		click(worksbtn);
	});

	// click logo
	logobtn.on("click", function() {
		left.addClass("overflow rewidth normal-view seen").removeClass("shrink large-view fade");
		right.addClass("overflow rewidth normal-view seen").removeClass("shrink large-view fade");
		middle.addClass("place-mid").removeClass("place-right place-left");
		body.removeClass("bodybg");
		logo.removeClass("invert");
		worksbtn.removeClass("invert fade").addClass("seen").prop("disabled", false);
		aboutmebtn.removeClass("invert fade").addClass("seen").prop("disabled", false);
	});

	// hover on works
	worksLink.mouseenter(function() {
		$(this).children(".wh-hide").removeClass("wh-hide").addClass("wh-show");
	}).mouseleave(function() {
		$(this).children(".wh-show").removeClass("wh-show").addClass("wh-hide");
	});
});
