
function setHeight( el, i){
	var elem 		= el;
	var index 		= i;
	var elem_width 	= elem.width();
	elem.height( elem_width / index );
}

$(document).ready(function(){
	var header 		= $(".header--animation");

	setHeight( header, 2.1559633 );

	$(window).resize(function(){
		var win_w = $(window).width();

		if(win_w > 680)
			setHeight( header, 2.1559633 );
		else
			header.removeAttr("style");
	});
});
