var fadeInContent = function(distanceToTop) {
  var toTop = distanceToTop;
  $('.fade-in').each(function(i) {

    var bottom_of_object = $(this).position().top + ($(this).outerHeight() / 2);
    var bottom_of_window = toTop + $(window).height();


    //console.log(bottom_of_object);

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {

      $(this).animate({
        'opacity': '1'
      }, 500);

    }

  });
};

//var toggleHeader = function(){
//
//}


$(function() {

  fadeInContent(0);
  $("#header").addClass("light");




  $(window).scroll(function() {
    var distanceToTop = $(window).scrollTop();

    //console.log(distanceToTop);


    if (distanceToTop > 310) {
      $("#header").removeClass("light");
    }else{
      $("#header").addClass("light");
    }


    //if (distanceToTop > 440) {
    //  $("#header").addClass("sticky");
    //} else if (distanceToTop === 0) {
    //  $("#header").removeClass("sticky");
    //}






    fadeInContent(distanceToTop);



  });
});