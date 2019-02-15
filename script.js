$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'nav-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });

  $('.return-top').click(function(){
    $('html').animate({scrollTop: 0});
  });

  $('a').hover(function(){
    $('.modal').css('display','block');
  });
});
