// Defualt namespace
var Hiof = Hiof || {};




Hiof.Options = {
  distanceToTop: $(window).scrollTop(),
  windowWidth: $(window).width(),
  distanceToTopBreakPoint: 0,
  distanceToSidebarSticky: 0,
  navigationBreakpoint: 770,
  contentHeight: $("#main").outerHeight(),
  language: Hiof.languageGetUrlParameter("lang")
};