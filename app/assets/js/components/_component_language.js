


Hiof.Language = {};

Hiof.Language.Check = function(){

  var language = Hiof.GetUrlParameter("lang");

   if (typeof language === 'undefined') {
    language = "nor";
   }


  return language;
};

Hiof.GetUrlParameter = function(sParam){

    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
};