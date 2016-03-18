class View {
  constructor() {
    this.ln = $('html').attr('lang');
    this.pageCategory = $('#main').attr('data-page-category');
    this.distanceToTop: $(window).scrollTop();
    this.windowWidth: $(window).width();
    this.windowHeight: $(window).height();
    this.distanceToTopBreakPoint: 0;
    this.distanceToSidebarSticky: 0;
    this.navigationBreakpoint: 770;
    this.contentHeight: $("#main").outerHeight();

    this.defaults = {
      // These are the defaults.
      id: null,
      server: undefined,
      url: undefined,
      template: null
    };
    this.scrollDest = false;
    this.metaData = {
      "sitename": "//hiof.no",
      "fbid": "265676486878954",
      "fbpublisher": "http://facebook.com/hiofnorge",
      "restimage": {
        "prefix": "http://hiof.no/assets/images/rest/",
        "1200x675": {
          "0": "hiof-varmgraa.jpg",
          "1": "hiof-aqua.jpg",
          "2": "hiof-lavendel.jpg",
          "3": "hiof-lysgraa.jpg",
          "4": "hiof-rosa.jpg",
          "5": "hiof-sjoegroenn.jpg"
        }
      }
    };


    this.meta = {
      "site_name": "//hiof.no",
      "og:url": Hiof.options.meta["og:url"],
      "og:type": "article",
      //"og:image": Hiof.options.meta["og:image"],
      "fb:app_id": "265676486878954",
      "og:title": Hiof.options.meta["og:title"],
      "og:description": Hiof.options.meta["og:description"],
      "article:author": Hiof.options.meta.author
    };

  }
  scrollTo(destination) {
    console.log('scollto function is running..');
    setTimeout(
      $.scrollTo($(destination), 500, {
        axis: 'y',
        offset: {
          top: -80
        }
      })
      , 3000);
    }
    getData(options = {}, that){
      // Setup the query
      let settings = Object.assign(
        {},
        this.defaults,
        options
      );


      var contentType = "application/x-www-form-urlencoded; charset=utf-8";

      if (window.XDomainRequest) { //for IE8,IE9
        contentType = "text/plain";
      }

      console.log('options from articleViewClass');
      console.log(options);
      console.log('merged settings...');
      console.log(settings);
      return $.ajax({
        url: settings.url,
        method: 'GET',
        async: true,
        dataType: 'json',
        data: settings,
        contentType: contentType,
        context: that
        //success: function(data) {
        //  //data.settings = settings;
        //  return data;
        //},
        //error: function(jqXHR, textStatus, errorThrown) {
        //  console.log("You can not send Cross Domain AJAX requests: " + errorThrown);
        //}

      });
    }
    setupClientInformationInOptions() {
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

    setupi18n() {
      $.ajax({
        dataType: "json",
        url: "/assets/js/data/i18n.json",
        async: false,
        success: function(data) {
          Hiof.options.i18n = data;
        }
      });
    };

    scrollToElement(destination) {
      var thisDestination;

      if ($(destination).length) {

        //debug('element exsist.. This is the value:');
        //debug(destination);
        thisDestination = $(destination + "");
      } else if($('a[name="' + destination.substr(1) + '"]').length) {
        //debug('element does exsist with a name slector..');
        thisDestination = $('a[name="' + destination.substr(1) + '"]');
      }else{
        //debug('Element does not exsist..');
        return;
      }
      $.scrollTo(thisDestination, 500, {
        axis: 'y',
        offset: {
          top: -80
        }
      });

    };


    Element.prototype.setAttributes(attrs) {
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
    storeInitialMetaInOptions() {


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

    createAndApplyMetaElement(key, value) {
      var meta = document.createElement('meta');
      meta.setAttributes({
        'property': key,
        'content': value
      });
      document.getElementsByTagName('head')[0].appendChild(meta);
    };



    syncHeadMeta(meta = {}){
      // Setup the settings
      //var settings = $.extend({
      //  // These are the defaults.
      //  "site_name": Hiof.options.meta.site_name,
      //  "og:url": Hiof.options.meta["og:url"],
      //  "og:title": Hiof.options.meta["og:title"],
      //  "og:description": Hiof.options.meta["og:description"],
      //  "og:type": Hiof.options.meta["og:type"],
      //  "og:image": Hiof.options.meta["og:image"],
      //  "fb:app_id": Hiof.options.meta.fbid,
      //  "article:author": Hiof.options.meta.author
      //}, options);

      let settings = Object.assign(
        {},
        this.meta,
        options
      );


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
    }
    updateAnalytics(){
      //ga('set', 'page', document.location.href);
      //ga('send', 'pageview');
    }

  }
