// Defualt namespace
var Hiof = Hiof || {};



Hiof.Polyfill = function() {

  // Since the current markup for navigation generators don't support full HTML controll
  // the following will add a active state to the current pagetreenav active page
  if($('#active-link').length){
    $('#active-link').parent().addClass("active");
  }



    



};