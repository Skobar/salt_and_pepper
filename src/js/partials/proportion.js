
function setHeight( el, i ){
	var elem 		= el;
	var index 		= i;
	var elem_width 	= elem.width();
	elem.height( elem_width / index );
	// console.log(elem.attr("class") + ": " + elem_width / index);
}

$(document).ready(function(){
	var header 				= $(".animation__header");
	var top_content_left 	= $(".top-content--billboard");
	var middle_content_left = $(".middle-content--billboard");
	var bottom_content_left = $(".bottom-content--billboard");

	setHeight( header, 2.1559633 );
	setHeight( top_content_left, 0.9 );
	setHeight( middle_content_left, 0.987 );
	setHeight( bottom_content_left, 0.983 );

	$(window).resize(function(){
		setHeight( header, 2.1559633 );
		setHeight( top_content_left, 0.9 );
		setHeight( middle_content_left, 0.987 );
		setHeight( bottom_content_left, 0.983 );
	});
});
