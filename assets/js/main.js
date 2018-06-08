//======= Parallax effect ==========

$(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});
	
});

//======= Navbar scroll effect ==========
var nav = $("#navbarChanger");

function changeNav() {

    $(window).scroll(function(event) {
        scroll = $(window).scrollTop();
        if (scroll > 50) {
            nav.removeClass('nav-1').addClass('nav-2');

            if ($(window).width() >= 768) {
         //       $("#logo-white").fadeOut();
          //      $("#logo-dark").fadeIn();
            } else {
            //    $("#logo-white").css("display", "none");
           //     $("#logo-dark").css("display", "block");
            }



        } else {

            nav.removeClass('nav-2').addClass('nav-1');

            if ($(window).width() >= 768) {


             //   $("#logo-white").fadeIn();
             //   $("#logo-dark").fadeOut();
            }



        }
    });
}
changeNav();

