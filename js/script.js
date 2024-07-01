$(document).ready(function() {
  var header = $('#header');
  var headerOffset = header.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > headerOffset) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});