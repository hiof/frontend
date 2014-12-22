var Hiof = Hiof || {};

Hiof.Helper = {};

Hiof.Helper.getUrlParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


(function(Hiof, undefined) {
    getUrlParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    createModal = function(options) {

        //console.log("Hiof.createModal  is running");
        var settings = $.extend({
            // These are the defaults.
            header: "",
            content: "",
            footer: ""
        }, options);

        var div = document.createElement('div'),
            modal,
            modalWrapper = $(div).clone().addClass("modal fade"),
            modalDialog = $(div).clone().addClass("modal-dialog"),
            modalContent = $(div).clone().addClass("modal-content"),
            modalHeader = $(div).clone().addClass("modal-header"),
            modalBody = $(div).clone().addClass("modal-body"),
            modalFooter = $(div).clone().addClass("modal-footer");

        if (settings.header) {
            //header = "";
            $(modalContent).append($(modalHeader).append(settings.header));
        } 

        if (settings.content) {
            //content = "";
            $(modalContent).append($(modalBody).append(settings.content));
        } 

        if (settings.footer) {
            //footer = "";
            $(modalContent).append($(modalFooter).append(settings.footer));
        }
        $(modalDialog).append($(modalContent));
        $(modalWrapper).append($(modalDialog));
        modal = $(modalWrapper);

        return modal;

    };



    languageCheck = function() {

        var language = Hiof.Options.language;

        if (typeof language === 'undefined') {
            language = "nor";
        }
        return language;
    };

    getUrlParameter = function(sParam) {

        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };
    getSvgIcon = function(icon) {


    var url = "/assets/images/icons/" + icon + ".svg";

    xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    if (xhr.overrideMimeType) xhr.overrideMimeType("image/svg+xml");
    xhr.send("");

    var response = xhr.responseXML.documentElement;
    return response;
  };



     //In this context, 'window' refers to the parameter

    window.Hiof.languageCheck = languageCheck;
    window.Hiof.languageGetUrlParameter = getUrlParameter;
    window.Hiof.getUrlParameterByName = getUrlParameterByName;
    window.Hiof.createModal = createModal;
    window.Hiof.getSvgIcon = getSvgIcon;


})(window.Hiof = window.Hiof || {});
