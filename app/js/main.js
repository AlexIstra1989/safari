$(function() {
  
});

$(document).ready(function() {
	$('.about__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

 $('.gallery__slider').slick ({
  prevArrow: '<button class="slick-prev slick-arrow"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="43.5" y="43.5" width="43" height="43" rx="21.5" transform="rotate(-180 43.5 43.5)" stroke="#C4C4C4"/><path d="M24 29L18 23.0016L24 17" stroke="white" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C4C4C4"/><path d="M19.2207 17L25.2207 22.9984L19.2207 29" stroke="white" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
  });

  $('.gallery__item-inner').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
   },
  });

  $('.menu__btn').on('click', function() {
   $('.menu__btn').toggleClass('menu__btn--active');
   $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__link').on('click', function(){
   $('.menu__btn').removeClass('menu__btn--active');
   $('.menu__list').removeClass('menu__list--active');
  });

  $(".menu").on("click", "a", function (event) {
   event.preventDefault();
   var id = $(this).attr('href'),
     top = $(id).offset().top;
   $('body,html').animate({ scrollTop: top }, 1000);
 });
});

