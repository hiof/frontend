//(function(Hiof, undefined) {
//
//    //Hiof.Language = {};
//
//    check = function() {
//
//        var language = Hiof.Options.language;
//
//        if (typeof language === 'undefined') {
//            language = "nor";
//        }
//        return language;
//    };
//
//    getUrlParameter = function(sParam) {
//
//        var sPageURL = window.location.search.substring(1),
//            sURLVariables = sPageURL.split('&');
//
//        for (var i = 0; i < sURLVariables.length; i++) {
//            var sParameterName = sURLVariables[i].split('=');
//            if (sParameterName[0] == sParam) {
//                return sParameterName[1];
//            }
//        }
//    };
//
//    window.Hiof.languageCheck = languageCheck;
//    window.Hiof.languagecreateModal = getUrlParameter;
//
//})(window.Hiof = window.Hiof || {});
//