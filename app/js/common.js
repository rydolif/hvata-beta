$(function() {


//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  $(".block").first().addClass('active');
  $(".active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .block__content").slideDown("slow");
    }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('body').toggleClass('body--no-scroll');
    $('.nav').toggleClass('nav--active');
    $('.header').toggleClass('header--menu');
    $('body').toggleClass('no-scroll');
  });

//-------------------------------активная ссилка---------------------------------------
  $('.header__nav a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('link--active');
      }
  });

//-------------------------------certificate slider---------------------------------------
	var swiper = new Swiper('.certificate__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.certificate__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.certificate__next',
        prevEl: '.certificate__prev',
      },
      breakpoints: {
	    992: {
	      slidesPerView: 2,
	      spaceBetween: 20
	    },
	    480: {
	      slidesPerView: 1,
	      spaceBetween: 20
	    },
	  }
    });


//-------------------------скорость якоря---------------------------------------
	$(".click").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
	});


//---------------------------tabs-----------------------
	$('.tabs__wrap').hide();
	$('.tabs__wrap:first').show();
	$('.tabs ul a:first').addClass('active');
	 $('.tabs ul a').click(function(event){
	  event.preventDefault();
	  $('.tabs ul a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs__wrap').hide();
	   var selectTab = $(this).attr('href');
	  $(selectTab).fadeIn();
	});


//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });

});

