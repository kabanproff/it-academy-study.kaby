$(document).ready(function() {
  $('.header__burg').click(function(event) {
    $('.header__burg,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//let prevScrollpos = window.pageYOffset;
//window.onscroll = function () {
//  let currentScrollPos = window.pageYOffset;
//  if (prevScrollpos > currentScrollPos) {
//    document.querySelector("header").style.visibility = "visible";
//  } else {
//    document.querySelector("header").style.top = "-70px";
//    document.querySelector("header").style.visibility = "hidden";
//  }
//  prevScrollpos = currentScrollPos;
//}; 