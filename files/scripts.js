/*
 * This function makes the buttons fade in
 * and fade out on hover and mouseout.
 */

$(document).ready( function buttonFade() {
	$('.button').fadeTo(0, 0.6);

	$('.button').hover( function() {
		$(this).fadeTo(100, 1);
	});
	$('.button').mouseout( function() {
		$(this).fadeTo(100, 0.6);
	});
});

/* 
 * This function takes user input and adds the input
 * to the <div id="messages">.
 * After 5 submits the board will be cleared.
 */
$(document).ready( function input() {
	$('#sendButton').click( function() {

		var toAdd = $('textarea[name=message]').val();
		$('#messages').append('<span id="mess">' + toAdd + '- </span>');

		$('textarea[name=message]').val('');
	});

	$(document).on('click', '#mess', function() {
		$(this).remove();
	});
});

$(document).ready( function clearMessage() {
	$('#clearButton').click( function() {
		$('#messages').empty();
		$('textarea[name=message]').val('');
	});
});

/* 
 * Dgital Clock
 */
$(document).ready( function digitalClock() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('digitalClock').innerHTML = h+":"+m+":"+s;
	var t = setTimeout(function(){digitalClock()},500);
});

function checkTime(i) {
	if (i < 10) { i = "0" + i };
	return i;
};

/* 
 * Date
 */
$(document).ready( function year() {
	var date = new Date();
	var y = date.getFullYear();
	document.getElementById('year').innerHTML = y;
});

$(document).ready( function month() {
	var date = new Date();
	var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var str = month[date.getMonth() - 1];
	document.getElementById('month').innerHTML = str;
});

$(document).ready( function day() {
	var date = new Date();
	var d = checkDate(date.getDate());

	var day = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
	var str = day[date.getDay()];
	document.getElementById('day').innerHTML = str + ", " + d;
	var t = setTimeout(function(){day()}, 43200000);
});

function checkDate(i) {
	if (i == 1) { i = i + "st"; 
	}else if ( i == 2) { i = i + "nd";
	}else if ( i == 3) { i = i + "rd";
	}else { i = i + "th"; }
	return i;
};