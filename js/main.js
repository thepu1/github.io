$(document).ready(function () {
  $('.mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu-active',
  });
});


$(document).ready(function(){
	var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
	$('.protfolio_manu').on( 'click', 'button', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
});

	$('.protfolio_manu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

})

//video


// slider

 $('.testimonial-carousel').owlCarousel({
          items:1,
          loop:true,
          autoplay:false,
          dots:true,
          nav:false,
          autoplay:true,
          smartSpeed:1500

            });


// counter js
 $(document).ready(function(){
  $('html').smoothScroll(1000);
  $('.action').counterUp({
    delay:1,
    time:100,
  });
 });


 // bar

   $('#bar1').barfiller({
            barColor:'#423E61'
         });
         $('#bar2').barfiller({
            barColor:'#200D00'
         });
         $('#bar3').barfiller({
            barColor:'#1F0043'
         });
         $('#bar4').barfiller({
            barColor:'#2D0112'
         });
          $('#bar5').barfiller({
            barColor:'#2D0112'
         });



     // sticky js
         $(".sticky-nav").sticky({});



  $(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 10) {
    $(".header-sticky").removeClass("sticky");
  } else {
    $(".header-sticky").addClass("sticky");
  }
});



// isotope

  $('.creative-works-filter li').on('click', function() {
          $('.creative-works-filter li').removeClass('active')
          $(this).addClass('active')
          var selector = $(this).attr('data-filter');
          $(".creative-works-list").isotope({
            filter: selector,
          });
        });


//counterup


$('.counter-number span').counterUp({
          delay: 10,
                time: 1000
            });