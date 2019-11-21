$(function () {
 var html_body = $('html, body');
 var $sOfset = 500;
 var $fh = $('.header')
 // Sticky Menu
 $(window).on('scroll', function () {
  var $offset = $(this).scrollTop();
  if ($offset > .5) {
   $fh.addClass('sticky');
  } else {
   $fh.removeClass('sticky');
  }
 });
});
