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

//-------------------------------slider---------------------------------------
  var galleryThumbs = new Swiper('.project__thumbs', {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.project__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.project__next',
      prevEl: '.project__prev',
    },
  });
  var galleryTop = new Swiper('.project__top', {
    spaceBetween: 40,
    loopedSlides: 5,
    pagination: {
      el: '.project__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.project__next',
      prevEl: '.project__prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
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

