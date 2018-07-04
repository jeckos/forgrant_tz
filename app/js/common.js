$(function() {

  $('.selectpicker').selectpicker({
    style: 'select_btn',
    size: 4
  });

  $(".header_nav").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


});
