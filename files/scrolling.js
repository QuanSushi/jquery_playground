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
		$body.stop().animate({
			scrollLeft: (0)}, 2500);
	});
});

$(document).ready( function scrollingRight() {
	$('#controller_right').click( function() {
		var $body = $('html, body');
		$body.stop().animate({
			scrollLeft: ('href="#slide2"')}, 2500);
		});
});