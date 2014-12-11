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
			scrollLeft: position}, 1500);
	});
});

$(document).ready( function scrollingRight() {
	$('#controller_right').click( function() {
		var $body = $('html, body');
		var nextDiv = $(getNextDiv());
		var position = nextDiv.position().left;
		$body.stop().animate({
			scrollLeft: position}, 1500);
	});
});

function getBodyPosition() {
	var target = $('body');
	var position = target.scrollLeft();
	return position;
};

function getLastDiv() {
	var body = getBodyPosition();
	var sw = $('.section').width();
	var target = "";
	if (body == sw) {
		target = "#slide1";
	}else if (body == sw * 2) {
		target = "#slide2";
	}else if (body == sw * 3) {
		target = "#slide3";
	}else if (body == sw * 4) {
		target = "#slide4";
	}else if (body == sw * 5) {
		target = "#slide5";
	}
	return target;
};

function getNextDiv() {
	var body = getBodyPosition();
	var sw = $('.section').width();
	var target = "";
	if (body == 0) {
		target = "#slide2";
	}else if (body == sw ) {
		target = "#slide3";
	}else if (body == sw * 2) {
		target = "#slide4";
	}else if (body == sw * 3) {
		target = "#slide5";
	}
	return target;
};