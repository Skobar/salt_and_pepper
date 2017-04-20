$(document).ready(function(){

	var middle_content = $(".middle-content--billboard");
	var middle_gallery = $(".middle-content--gallery");
	var bottom_content = $(".bottom-content--billboard");
	var bottom_gallery = $(".bottom-content--gallery");

	$(window).scroll(function () {
		if ($(this).scrollTop() > (middle_content.offset().top - 300)) {
			middle_content.addClass("animation__to-right");
			middle_gallery.addClass("animation__to-left");
		}

		if($(this).scrollTop() > (bottom_content.offset().top - 300)){
			bottom_content.addClass("animation__to-left");
			bottom_gallery.addClass("animation__to-right");
		}
	});
});
