var Hiof = Hiof || {};




// This page use slideout-navigation functions from 
// the slideout vendor plugin (defined in bower.json)



Hiof.HeaderToggle = function(distanceToTop, distanceToTopBreakPoint, viewportWidth) {
  if(viewportWidth < 770){
      //console.log("mobile navigation is activated");
      $("#header").removeClass("light");
  }else{
    if (distanceToTop > distanceToTopBreakPoint) {
        $("#header").removeClass("light");
    } else {
        $("#header").addClass("light");
    }
  }
};
Hiof.NavigationPageSection = function(distanceToTop) {
    if ($(".nav-page").length) {
        if (distanceToTop > 575) {
            $(".nav-page").addClass("sticky");
        } else {
            $(".nav-page").removeClass("sticky");
        }
    }
};

