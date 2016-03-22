(function(Hiof, undefined) {

  // Pollyfill for startsWith if it does not excist
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(str) {
      return !this.indexOf(str);
    };
  }
  //if (!Element.prototype.setAttributes) {
  //  Element.prototype.setAttributes(attrs) {
  //    for (var idx in attrs) {
  //      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
  //        for (var prop in attrs[idx]) {
  //          this.style[prop] = attrs[idx][prop];
  //        }
  //      } else if (idx === 'html') {
  //        this.innerHTML = attrs[idx];
  //      } else {
  //        this.setAttribute(idx, attrs[idx]);
  //      }
  //    }
  //  };
  //}

})(window.Hiof = window.Hiof || {});


(function(Hiof, undefined) {

  $.support.cors = true;

})(window.Hiof = window.Hiof || {});






(function(Hiof, undefined) {



  //debug = function(value) {
  //  console.log(value);
  //};

  validateEmail = function(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  getHostname = function(url) {
    //debug('URL: ' + url);
    var pattern = /^(http|https)/;
    if (pattern.test(url)) {
      //debug("url starts with http|https");
      var m = url.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);

      return m[1] + ':' + m[2] + m[3];
    } else {
      return;
    }
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

  //window.Hiof.languageCheck = languageCheck;
  //window.Hiof.languageGetUrlParameter = getUrlParameter;
  //window.Hiof.getUrlParameterByName = getUrlParameterByName;
  //window.Hiof.getSvgIcon = getSvgIcon;
  //window.debug = debug;
  window.Hiof.validateEmail = validateEmail;
  window.Hiof.getHostname = getHostname;


  //window.Hiof.setupClientInformationInOptions = setupClientInformationInOptions;
  //window.Hiof.setupi18n = setupi18n;
  //window.Hiof.syncMetaInformation = syncMetaInformation;
  //window.Hiof.storeInitialMetaInOptions = storeInitialMetaInOptions;
  //window.Hiof.updateAnalytics = updateAnalytics;
  //window.Hiof.scrollToElement = scrollToElement;




})(window.Hiof = window.Hiof || {});
