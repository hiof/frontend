(function(Hiof, undefined) {

  //Hiof.Tabindex = {};


  tabindex = function(e) {
    var headerStartIndex = 1000,
    contentStartIndex = 2000,
    sidebarStartIndex = 3000,
    footerStartIndex = 4000,
    childrenElements = "a, area, button, input:visible, object, select, textarea";

    $("#header").find(childrenElements).each(function() {
      $(this).attr('tabindex', headerStartIndex++);
    });

    $("#content").find(childrenElements).each(function() {
      $(this).attr('tabindex', contentStartIndex++);
    });

    $("#sidebar").find(childrenElements).each(function() {
      $(this).attr('tabindex', sidebarStartIndex++);
    });

    $("#footer").find(childrenElements).each(function() {
      $(this).attr('tabindex', footerStartIndex++);
    });

  };
  $(function() {
    tabindex();
  });

  // Expose functions to the global namespace
  window.Hiof.tabindex = tabindex;
})(window.Hiof = window.Hiof || {});
