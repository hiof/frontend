// Defualt namespace
var Hiof = Hiof || {};


Hiof.getSvgIcon = function(icon){


  var url = "assets/images/icons/" + icon + ".svg";

  xhr = new XMLHttpRequest();

  xhr.open("GET",url,false);
  xhr.overrideMimeType("image/svg+xml");
  xhr.send("");

  var response = xhr.responseXML.documentElement;
  return response;
  //console.log(xhr.responseXML.documentElement);
};