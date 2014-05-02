// -----------------------------------------
// Slideout navigation functions


var toggleLeftNavigation = function() {
  $("#body").toggleClass("push-right");
  if ($("#body.push-right").length === 0) {
    $("#mobile-overlay").remove();
  } else {
    $("#body").append('<div id="mobile-overlay" class="mobile-pages"></div>');
  }
  ;
},
toggleRightNavigation = function() {
  $("#body").toggleClass("push-left");
  if ($("#body.push-left").length === 0) {
    $("#mobile-overlay").remove();
  } else {
    $("#body").append('<div id="mobile-overlay" class="mobile-user"></div>');
  }
  ;
},
stopHorizontalScroll = function () {
  var lastScrollLeft;
  lastScrollLeft = 0;
  $(window).scroll(function () {
    var documentScrollLeft;
    documentScrollLeft = $(document).scrollLeft();
    if (lastScrollLeft !== documentScrollLeft) {
     lastScrollLeft = documentScrollLeft;
   };
 });
};