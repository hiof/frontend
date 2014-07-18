

var Hiof = Hiof || {};

Hiof.Helper = {};

Hiof.Helper.getUrlParameterByName = function(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

//function getParameterByName(name) {
//
//}