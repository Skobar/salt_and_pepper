$(document).ready(function(){
	// middle and bottom blocks animation on
	var middle_content = $(".middle-content--billboard");
	var middle_gallery = $(".middle-content--gallery");
	var bottom_content = $(".bottom-content--billboard");
	var bottom_gallery = $(".bottom-content--gallery");
	var win_h = $(window).height();

	$(window).scroll(function () {
		if ($(this).scrollTop() > (middle_content.offset().top - win_h)) {
			middle_content.addClass("animation__to-right");
			middle_gallery.addClass("animation__to-left");
		}

		if($(this).scrollTop() > (bottom_content.offset().top - win_h)){
			bottom_content.addClass("animation__to-left");
			bottom_gallery.addClass("animation__to-right");
		}
	});


	// mobile sidebar menu animation
	var sidebar_close = $(".sidebar-close");
	var menu_item = $(".sidebar-menu--item");

	sidebar_close.on("click", function(){
	  sidebar_close.toggleClass("active");
	  menu_item.toggleClass("sidebar-menu--item__active");
	});
});
