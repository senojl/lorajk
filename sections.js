$(document).ready(function() {
	var divs = $('.gallery');
	$('.link').click(function(e) {
    	e.preventDefault();
    	divs.hide();
    	$($(this).attr('href')).show();
	});
	$('#fsupport').click(function(e) {
    	$('#fsupport').show;
    	$('#mintor').fadeTo(0, 0.5);
	});
});