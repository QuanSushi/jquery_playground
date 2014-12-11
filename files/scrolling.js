$(document).ready( function buttonAnimation() {
	$('.controller').hover(function() {
		$(this).fadeTo(50, 0.5);
	});

	$('.controller').mouseout(function() {
		$(this).fadeTo(50, 1);
	});

	$('.controller').click(function() {
		$(this).fadeTo(0, 1);
	});
});

$(document).ready( function scrollingLeft() {
	$('#controller_left').click( function() {
		var $body = $('html, body');
		var lastDiv = $(getLastDiv());
		var position = lastDiv.position().left;
		$body.stop().animate({
			scrollLeft: position}, 2500);
	});
});

$(document).ready( function scrollingRight() {
	$('#controller_right').click( function() {
		var $body = $('html, body');
		var nextDiv = $(getNextDiv());
		var position = nextDiv.position().left;
		$body.stop().animate({
			scrollLeft: position}, 2500);
	});
});

function getBodyPosition() {
	var target = $('body');
	var position = target.scrollLeft();
	return position;
};

function getLastDiv() {
	var body = getBodyPosition();
	var target = "";
	if (body <= 2000) {
		target = "#slide1";
	}else if (body <= 4000) {
		target = "#slide2";
	}else if (body <= 6000) {
		target = "#slide3";
	}else if (body <= 8000) {
		target = "#slide4";
	}else if (body <= 10000) {
		target = "#slide5";
	}else if (body <= 12000) {
		target = "#slide5";
	}
	return target;
};

function getNextDiv() {
	var body = getBodyPosition();
	var target = "";
	if (body < 2000) {
		target = "#slide2";
	}else if (body < 4000) {
		target = "#slide3";
	}else if (body < 6000) {
		target = "#slide4";
	}else if (body < 8000) {
		target = "#slide5";
	}
	return target;
};