$(document).ready(function(){
  //gets the nav bar height
  var headerHeight = $('nav').outerHeight();
  $('.slide-section').click(function(e){
    //gets the clicked attribute
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });
});

$(window).scroll(function() {
  var theta = $(window).scrollTop() / 500 % Math.PI;
  $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});
