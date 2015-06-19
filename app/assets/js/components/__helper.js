(function(Hiof, undefined) {

  // Pollyfill for startsWith if it does not excist
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(str) {
      return !this.indexOf(str);
    };
  }


  $.support.cors = true;




  // Handlebars helper
  Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if (!ary || ary.length === 0)
      return options.inverse(this);
    var result = [];
    for (var i = 0; i < max && i < ary.length; ++i)
      result.push(options.fn(ary[i]));
    return result.join('');
  });


  Handlebars.registerHelper('trimString70', function(passedString) {
    var theString = passedString.substring(0, 70);
    return new Handlebars.SafeString(theString) + "...";
  });

  Handlebars.registerHelper('capitalizeFirstLetter', function(value) {
    if (value) {
      return new Handlebars.SafeString(value.charAt(0).toUpperCase() + value.slice(1));
    }
  });
  Handlebars.registerHelper('eachProperty', function(context, options) {
      var ret = "";
      for(var prop in context)
      {
          ret = ret + options.fn({property:prop,value:context[prop]});
      }
      return ret;
  });
  Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
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
    //if (url  != null) {
    //      var link = url.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/);
    //      debug(link[0]);
    //}else{return;}




    //result = parts[0]+':'+parts[2]+parts[3]+'/' ;

    //return result;
    //var m = url.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);
    //return m ? m[0] : null;
  };


  setupClientInformationInOptions = function() {
    var ua = detect.parse(navigator.userAgent);


    if (ua.browser) {
      var browserVersionMajor,
        browserVersionMinor,
        browserVersionPatch;
      if (ua.browser.major) {
        browserVersionMajor = ua.browser.major;
      } else {
        browserVersionMajor = '0';
      }
      if (ua.browser.minor) {
        browserVersionMinor = ua.browser.minor;
      } else {
        browserVersionMinor = '0';
      }
      if (ua.browser.patch) {
        browserVersionPatch = ua.browser.patch;
      } else {
        browserVersionPatch = '0';
      }

      browserVersion = browserVersionMajor + '.' + browserVersionMinor + '.' + browserVersionPatch;
    }


    if (ua.os) {
      var osVersionMajor,
        osVersionMinor,
        osVersionPatch;
      if (ua.os.major) {
        osVersionMajor = ua.os.major;
      } else {
        osVersionMajor = '0';
      }
      if (ua.os.minor) {
        osVersionMinor = ua.os.minor;
      } else {
        osVersionMinor = '0';
      }
      if (ua.os.patch) {
        osVersionPatch = ua.os.patch;
      } else {
        osVersionPatch = '0';
      }

      osVersion = osVersionMajor + '.' + osVersionMinor + '.' + osVersionPatch;
    }


    options.client = {};
    options.client.url = window.location.href;
    options.client.osName = ua.os.family;
    options.client.osVersion = osVersion;
    options.client.browserName = ua.browser.family;
    options.client.browserVersion = browserVersion;
    options.client.viewportWidth = window.innerWidth;
    options.client.viewportHeight = window.innerHeight;

  };

  setupi18n = function() {
    $.ajax({
      dataType: "json",
      url: "/assets/js/data/i18n.json",
      async: false,
      success: function(data) {
        Hiof.options.i18n = data;
      }
    });
  };


  Element.prototype.setAttributes = function(attrs) {
    for (var idx in attrs) {
      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
        for (var prop in attrs[idx]) {
          this.style[prop] = attrs[idx][prop];
        }
      } else if (idx === 'html') {
        this.innerHTML = attrs[idx];
      } else {
        this.setAttribute(idx, attrs[idx]);
      }
    }
  };
  storeInitialMetaInOptions = function() {


    var documentTitle = $('head title').text(),
      documentDescription = "",
      documentAuthor = "",
      documentImage = Hiof.options.meta.restimage.prefix + Hiof.options.meta.restimage["1200x675"]["1"];
    //debug(documentTitle);
    if ($('#content header h1').length) {
      documentTitle = $('#content header h1').text();
    }
    if ($('head meta[name="Description"]').length) {
      documentDescription = $('head meta[name="Description"]').attr("content");
    }
    if ($('head meta[name="Author"]').length) {
      documentAuthor = $('head meta[name="Author"]').attr("content");
    }
    //Hiof.options.meta = {};
    var meta = Hiof.options.meta;
    meta.site_name = Hiof.options.i18n.nb.meta.name;
    meta["og:url"] = window.location.href;
    meta["og:title"] = documentTitle;
    meta["og:description"] = documentDescription;
    meta["og:type"] = "website";
    meta["og:image"] = documentImage;
    meta.author = documentAuthor;
    //meta["fb:app_id"] = Hiof.options.i18n.meta.fbid;
  };

  createAndApplyMetaElement = function(key, value) {
    var meta = document.createElement('meta');
    meta.setAttributes({
      'property': key,
      'content': value
    });
    document.getElementsByTagName('head')[0].appendChild(meta);
  };

  syncMetaInformation = function(options) {

    // Setup the settings
    var settings = $.extend({
      // These are the defaults.
      "site_name": Hiof.options.meta.site_name,
      "og:url": Hiof.options.meta["og:url"],
      "og:title": Hiof.options.meta["og:title"],
      "og:description": Hiof.options.meta["og:description"],
      "og:type": Hiof.options.meta["og:type"],
      "og:image": Hiof.options.meta["og:image"],
      "fb:app_id": Hiof.options.meta.fbid,
      "article:author": Hiof.options.meta.author
    }, options);

    // Updated / create meta-tags
    $.each(settings, function(key, value) {

      if (key === "og:title") {
        // If the string contains pipe, remove it and everything after the pipe
        if (value.indexOf('|')) {
          value = value.substring(0, value.indexOf('|'));
        }

        if ($('meta[property="' + key + '"]').length) {
          $('head title').text(value + ' | ' + settings.site_name);
          $('meta[property="' + key + '"]').attr('content', value);

        } else {
          createAndApplyMetaElement(key, value);
        }
      } else if (key === "article:author") {
        if ($('meta[property="' + key + '"]').length) {
          $('meta[property="' + key + '"]').attr('content', value);
          $('meta[name="Author"]').attr('content', value);
        } else {
          createAndApplyMetaElement(key, value);
        }

      } else if (key === "og:description") {
        if ($('meta[property="' + key + '"]').length) {
          $('meta[property="' + key + '"]').attr('content', value);
          $('meta[name="Description"]').attr('content', value);
        } else {
          createAndApplyMetaElement(key, value);
        }
      } else if ($('meta[property="' + key + '"]').length) {
        $('meta[property="' + key + '"]').attr('content', value);
      } else {
        createAndApplyMetaElement(key, value);
      }

    });

  };


  updateAnalytics = function() {
    //ga('set', 'page', document.location.href);
    //ga('send', 'pageview');
  };
  scrollToElement = function(destination){

      $.scrollTo($(destination), 500, {
        axis: 'y',
        offset: {
          top: -80
        }
      });

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
  window.Hiof.validateEmail = validateEmail;
  window.Hiof.getHostname = getHostname;
  window.Hiof.setupClientInformationInOptions = setupClientInformationInOptions;
  window.Hiof.setupi18n = setupi18n;
  window.Hiof.syncMetaInformation = syncMetaInformation;
  window.Hiof.storeInitialMetaInOptions = storeInitialMetaInOptions;
  window.Hiof.updateAnalytics = updateAnalytics;
  window.Hiof.scrollToElement = scrollToElement;




})(window.Hiof = window.Hiof || {});
