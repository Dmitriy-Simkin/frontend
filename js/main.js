$(function(){
  var $slowScroll = $('.header__content-link, .header__link, .logo')
  $slowScroll.on("click", function (event){
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  function headerFixed(){
    if($(document).scrollTop() > 100) {
      $('.header__top').addClass('header__top--fixed');
    } else {
      $('.header__top').removeClass('header__top--fixed');
    }
  }

  headerFixed();
$(document).on('scroll', headerFixed)


  $('.burger').click(function(event) {
    $('.burger').toggleClass('burger--active'),
    $('.header__list').toggleClass('header__list--active'),
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function(event) {
    $('.burger').removeClass('burger--active'),
    $('.header__list').removeClass('header__list--active'),
    $('body').removeClass('lock');
  });

$('.reviews__slider').slick({
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        infinite: true,
      }}
    ]
});
var mixer = mixitup('.works__content');
});

