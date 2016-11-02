$(document).ready(function () {
	$("#aboutme-btn").on("click", function() {
		$("#right").fadeTo(200, 0.01, function() {
			$("#left").fadeTo(200, 1).removeClass("shrink").addClass("wrapper overflow views large-view");
			$("#middle").removeClass("place-mid place-left").addClass("place-right");
			$("#right").fadeTo(400, 0).removeClass("wrapper overflow views normal-view large-view").addClass("shrink");
		});
	});
	$("#works-btn").on("click", function() {
		$("#left").fadeTo(200, 0.01, function() {
			$("#right").fadeTo(200, 1).removeClass("shrink").addClass("wrapper overflow views large-view");
			$("#middle").removeClass("place-mid place-right").addClass("place-left");
			$("#left").fadeTo(400, 0).removeClass("wrapper overflow views normal-view large-view").addClass("shrink");
		});
	});
	$("#logo-btn").on("click", function() {
		$("#left").fadeTo(200, 1).removeClass("shrink large-view").addClass("wrapper overflow views normal-view");
		$("#right").fadeTo(200, 1).removeClass("shrink large-view").addClass("wrapper overflow views normal-view");
		$("#middle").removeClass("place-right place-left").addClass("place-mid");
	});
});
