jQuery(document).ready(function() {	

	'use strict';

	// Clients carousel settings
	jQuery("#products-carousel").slick({
		arrows: false,
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplaySpeed:2000,
	  	autoplay:true,
        responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2,
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	          }
	        }
		]
	});

	// Mobile nav button
	jQuery('#menu-btn').on("click", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
		} else {
			jQuery(this).addClass('toggled');
		}
	})

	// Mobile nav button mobile tap
	jQuery('#menu-btn').on("tap", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
		} else {
			jQuery(this).addClass('toggled');
		}
	})
	    
});