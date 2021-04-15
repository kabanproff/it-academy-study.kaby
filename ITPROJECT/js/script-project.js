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
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnFocus:false,
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
        slidesToShow:1,
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

$(document).ready(function() {
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
});
