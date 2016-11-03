$(document).ready(function () {
	function welcome() {
		var wctext = 'System.out.print("Welcome!");';
		$("#wctext").html(wctext).css("opacity","1");
	};
	welcome();
	setTimeout(function() {
		$("#welcome").css({
			"opacity":"0",
			"top":"50%",
			"bottom":"50%",
			"left":"50%",
			"right":"50%",
		});
	}, 2500);
	setTimeout(function() {
		$("#welcome").css("display","none");
	}, 3500);
	$("#aboutme-btn").on("click", function() {
		$("#right").fadeTo(200, 0, function() {
			$("#right").addClass("shrink").removeClass("overflow rewidth normal-view large-view");
			$("#middle").addClass("place-right").removeClass("place-mid place-left");
			$("#left").fadeTo(200, 1).addClass("overflow rewidth large-view").removeClass("shrink");
		});
		$("body").css("background-color", "#e6e6e6");
		$("#logo").css("filter","invert(100%)");
		$("#aboutme-btn").css("opacity", "0").prop("disabled", true);
		$("#works-btn").css({"opacity":"1", "filter":"invert(100%)"}).prop("disabled", false);
	});
	$("#works-btn").on("click", function() {
		$("#left").fadeTo(200, 0, function() {
			$("#left").addClass("shrink").removeClass("overflow rewidth normal-view large-view");
			$("#middle").addClass("place-left").removeClass("place-mid place-right");
			$("#right").fadeTo(200, 1).addClass("overflow rewidth large-view").removeClass("shrink");
		});
		$("body").css("background-color", "#e6e6e6");
		$("#logo").css("filter","invert(100%)");
		$("#works-btn").css("opacity", "0").prop("disabled", true);
		$("#aboutme-btn").css({"opacity":"1", "filter":"invert(100%)"}).prop("disabled", false);
	});
	$("#logo-btn").on("click", function() {
		$("#left").fadeTo(200, 1).addClass("overflow rewidth normal-view").removeClass("shrink large-view");
		$("#right").fadeTo(200, 1).addClass("overflow rewidth normal-view").removeClass("shrink large-view");
		$("#middle").addClass("place-mid").removeClass("place-right place-left");
		$("body").css("background-color", "black");
		$("#logo").css("filter","none");
		$("#works-btn").css({"opacity":"1", "filter":"none"}).prop("disabled", false);
		$("#aboutme-btn").css({"opacity":"1", "filter":"none"}).prop("disabled", false);
	});
});
