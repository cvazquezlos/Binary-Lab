
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(

  function() {

    $("html").niceScroll({
    	cursorcolor:"#0188CF",
    	scrollspeed :"100",
    	cursorborder:"1px solid #0188CF",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });

  }

);

new WOW().init();

// Hero Zoom on Scroll A PEN BY Derek Palladino
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".work-image").css({
		width: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%"
	});
});

/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>


