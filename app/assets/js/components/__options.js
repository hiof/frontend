// Defualt namespace
(function(Hiof, undefined) {




  options = {
    distanceToTop: $(window).scrollTop(),
    windowWidth: $(window).width(),
    windowHeight: $(window).height(),
    distanceToTopBreakPoint: 0,
    distanceToSidebarSticky: 0,
    navigationBreakpoint: 770,
    contentHeight: $("#main").outerHeight(),
    language: $("html").attr('lang'),
    "meta": {
      "fbid": "265676486878954",
      "fbpublisher": "http://facebook.com/hiofnorge",
      "restimage": {
        "prefix": "http://staging.hiof.no/assets/images/rest/",
        "1200x675": {
          "0": "hiof-varmgraa.jpg",
          "1": "hiof-aqua.jpg",
          "2": "hiof-lavendel.jpg",
          "3": "hiof-lysgraa.jpg",
          "4": "hiof-rosa.jpg",
          "5": "hiof-sjoegroenn.jpg"
        }
      }
    }
  };



  window.Hiof.Options = options;
  window.Hiof.options = options;


  // Setup client informaton
  Hiof.setupClientInformationInOptions();
  Hiof.setupi18n();
  Hiof.storeInitialMetaInOptions();

})(window.Hiof = window.Hiof || {});
