$(document).ready(function() {
	var divs = $('.gallery');
	$('.link').click(function(e) {
    	e.preventDefault();
    	divs.hide();
    	$($(this).attr('href')).show();
	});
});