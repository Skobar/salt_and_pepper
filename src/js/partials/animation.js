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
	var sidebar_close 	= $(".sidebar-close");
	var link_close 		= $(".sidebar-menu--link__close");
	var menu_item 		= $(".sidebar-menu--item");
	var win_w 			= $(window).width();

	function openMenu(){
			sidebar_close.addClass("active");
			menu_item.addClass("sidebar-menu--item__active");
	}

	function closeMenu(){
		sidebar_close.removeClass("active");
		menu_item.removeClass("sidebar-menu--item__active");
	}

	sidebar_close.on("click", function(){
		if(!sidebar_close.hasClass("active") && win_w < 680){
			openMenu();
		}else{
			closeMenu();
		}
	});

	link_close.on("click", function(){
		closeMenu();
		return false;
	});

	$(window).resize(function(){
		var win_w 		= $(window).width();
		if(win_w > 680)
			closeMenu();
	});
});
