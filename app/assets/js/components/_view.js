class View {
  constructor() {
    this.ln = $('html').attr('lang');
    this.pageCategory = $('#main').attr('data-page-category');
    this.defaults = {
      // These are the defaults.
      id: null,
      server: undefined,
      url: undefined,
      template: null
    };
    this.scrollDest = false;
    this.meta = {
      "fbid": "265676486878954",
      "fbpublisher": "http://facebook.com/hiofnorge",
      "restimage": {
        "prefix": "http://staging.hiof.no/assets/images/rest/",
        "1200x675": {
          "0": "hiof-varmgraa.jpg",
          "1": "hiof-aqua.jpg",
          "2": "hiof-lavendel.jpg",
          "3": "hiof-lysgraa.jpg",
          "4": "hiof-rosa.jpg",
          "5": "hiof-sjoegroenn.jpg"
        }
      }
    }
  }
  scrollTo(destination) {
    if (this.scrollDest) {
      $.scrollTo($(destination), 500, {
        axis: 'y',
        offset: {
          top: -80
        }
      });
    }
  }
  getData(options = {}){
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
    $.ajax({
      url: settings.url,
      method: 'GET',
      async: true,
      dataType: 'json',
      data: settings,
      contentType: contentType,
      context: this,
      success: function(data) {
        data.settings = settings;
        return data;
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("You can not send Cross Domain AJAX requests: " + errorThrown);
      }

    });
  }
  syncHeadMeta(meta = {}){
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
  }
  updateAnalytics(){
    //ga('set', 'page', document.location.href);
    //ga('send', 'pageview');
  }

}
