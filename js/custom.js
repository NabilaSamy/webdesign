// 'use strict';
/* global $, alert, console */

$(	function(){
	'use strict';
	
	// Trigger Nice Scroll
	$('html').niceScroll({
		cursorcolor: '#888',
		cursorwidth: '8',
		cursorborder: '1px solid #888',
		cursorborderradius: 8
	});
	
	// Scroll to Our Team
	$('.btn-team').click(function(){
		$('html, body').animate({
			scrollTop: $('.our-team').offset().top
		}, 1000);
	});
	
	// Scroll to Our Works
	$('.btn-work').click(function(){
		$('html, body').animate({
			scrollTop: $('.subscribe').offset().top
		}, 1000);
	});
	
	// Change Header Height
	//$('.header').height($(window).height());
	
	// Scroll to Features
	$('.header .arrow i').click(function(){
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
	
	// Show Hidden Items From Our Works
	$('.show-more').click(function(){
		$('.works .hidden').fadeIn(1000);
	});
	
	// Check in Feedbacks
	var leftArrow = $('.feedbacks .fa-chevron-left'), rightArrow = $('.feedbacks .fa-chevron-right');
	function checkClients(){
		/*if($('.client:first').hasClass('active')){	// long if statement
			leftArrow.fadeOut();
		} else {
			leftArrow.fadeIn();
		}
		if($('.client:last').hasClass('active')){	// long if statement
			rightArrow.fadeOut();
		} else {
			rightArrow.fadeIn();
		}	*/
		$('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();	// short if statement
		$('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();	// short if statement
	}
	checkClients();
	
	// Show Hidden Items From Feedbacks
	$('.feedbacks i').click(function(){
		if($(this).hasClass('fa-chevron-right')){
			$('.feedbacks .active').fadeOut(100, function(){
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				checkClients();
			});
		} else {
			$('.feedbacks .active').fadeOut(100, function(){
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
});
