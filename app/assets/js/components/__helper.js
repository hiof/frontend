//var Hiof = Hiof || {};
//
//Hiof.Helper = {};
//
//Hiof.Helper.getUrlParameterByName = function(name) {
//  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//    results = regex.exec(location.search);
//  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//};


(function(Hiof, undefined) {






  $.support.cors = true;




  Handlebars.registerHelper('each_upto', function(ary, max, options) {
      if(!ary || ary.length === 0)
          return options.inverse(this);

      var result = [ ];
      for(var i = 0; i < max && i < ary.length; ++i)
          result.push(options.fn(ary[i]));
      return result.join('');
  });



  // This is our "rescue" method.
  function notFound() {
    if ($('#studie').length) {

    } else {
      $("#content").html("Fant ikke det du lette etter.");
    }
  }

  // Error message
  Path.rescue(notFound);







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
    var req;

    if (window.XMLHttpRequest) {
      req = new XMLHttpRequest();
    }


    if (req !== null) {

      var url = "/assets/images/icons/" + icon + ".svg";

      req.open("GET", url, false);

      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {}
      };

      if (req.overrideMimeType) req.overrideMimeType("image/svg+xml");
      req.send();

      var response = req.responseXML.documentElement;
      return response;
    } else {
      // Unable to get the data
    }
  };

  debug = function(value) {
    console.log(value);
  };



  $(function() {
    // Set the footable.filterFunction to use regex on the #studie page
    if ($('#studie').length) {
      window.footable.options.filter.filterFunction = function(index) {
        var $t = $(this),
          $table = $t.parents('table:first'),
          filter = $table.data('current-filter').toUpperCase(),
          columns = $t.find('td');

        var regEx = new RegExp(filter);
        var result = false;
        for (i = 0; i < columns.length; i++) {
          var text = $(columns[i]).text();
          result = regEx.test(text.toUpperCase());
          if (result === true)
            break;

          if (!$table.data('filter-text-only')) {
            text = $(columns[i]).data("value");
            if (text)
              result = regEx.test(text.toString().toUpperCase());
          }

          if (result === true)
            break;
        }
        return result;
      };

    }
  });
  //In this context, 'window' refers to the parameter

  window.Hiof.languageCheck = languageCheck;
  window.Hiof.languageGetUrlParameter = getUrlParameter;
  window.Hiof.getUrlParameterByName = getUrlParameterByName;
  window.Hiof.createModal = createModal;
  window.Hiof.getSvgIcon = getSvgIcon;
  window.debug = debug;


})(window.Hiof = window.Hiof || {});
