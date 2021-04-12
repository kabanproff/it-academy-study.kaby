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

