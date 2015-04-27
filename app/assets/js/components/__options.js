// Defualt namespace
(function(Hiof, undefined) {




  options = {
    distanceToTop: $(window).scrollTop(),
    windowWidth: $(window).width(),
    distanceToTopBreakPoint: 0,
    distanceToSidebarSticky: 0,
    navigationBreakpoint: 770,
    contentHeight: $("#main").outerHeight(),
    language: $("html").attr('lang')
  };



  window.Hiof.Options = options;
  window.Hiof.options = options;


  // Setup client informaton
  setupClientInformationInOptions();
  setupi18n();


})(window.Hiof = window.Hiof || {});
