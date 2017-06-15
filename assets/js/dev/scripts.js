$(document).ready(function() {
  /*
  $('nav.main-nav').before('<button class="menu-btn"><img src="/assets/images/menu.svg" />Menu</button>');
  $('nav.main-nav ul').addClass('hide');

  $(".menu-btn").click(function() {
      $("nav.main-nav ul").toggleClass('hide');
      $(".menu-btn").toggleClass('close');
  });
*/
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  };
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });
});
