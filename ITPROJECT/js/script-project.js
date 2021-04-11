$(document).ready(function() {
  $('.header__burg').click(function(event) {
    $('.header__burg,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.slider__box').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  infinite: true,
  speed: 1500,
  fade: true,
  });
});
