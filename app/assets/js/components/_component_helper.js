//var Hiof = Hiof || {};

Hiof.Helper = {};

Hiof.Helper.getUrlParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


(function(Hiof, undefined) {
    Hiof.getUrlParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    Hiof.createModal = function(options) {

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
})(window.Hiof = window.Hiof || {});
