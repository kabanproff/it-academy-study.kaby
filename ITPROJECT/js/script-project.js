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
    $('.carusel__wrap').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive:[
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    },
    {
      breakpoint:480,
      settings: {
        slidesToShow:1
      }
    }
  ],
  });
});



(function($) {
  $(function() {
    $("ul.tabs__list").on("click", "li:not(.act)", function() {
      $(this)
        .addClass("act")
        .siblings()
        .removeClass("act")
        .closest("div.product__tabs")
        .find("div.tabs__content")
        .removeClass("act")
        .eq($(this).index())
        .addClass("act");
    });
  });
})(jQuery);
