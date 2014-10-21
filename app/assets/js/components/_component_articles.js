(function(Hiof, undefined) {



  Hiof.articleDisplayView = function(data, options) {
    var templateSource;


    if (options.viewer === 'single') {
      templateSource = $("#article-post-single").html();
    } else if (options.viewer === 'feed') {
      templateSource = $("#article-posts").html();
    } else {
      templateSource = $("#article-posts").html();
    }
    //console.log("Singleview = " + singleView);

    var template = Handlebars.compile(templateSource),
      studentHTML = template(data);
    //console.log(template);

    if (options.destination === '.outlet') {
      //var articleCount = $('.article').length;

      $(options.destination).append(studentHTML);
      //Hiof.EqualHeight($(".article"));
    } else {
      $('#content').html(studentHTML);
    }
    //if (!singleView) {
    //  // Fix the layout
    //  Hiof.LayoutHelper();
    //  //Hiof.EqualHeight($(".article"));
    //}


    $.scrollTo($("#content"), 500, {
      axis: 'y',
      offset: {
        top: -80
      }
    });


  };
  Hiof.articleSetupOptions = function() {
    var thisLoader = $('.article-load'),
      thisPageId = null,
      thisPage = 1,
      thisPageSize = 20,
      thisViewer = false,
      thisAuthorId = '',
      thisCategory = '',
      thisDestination = '';
    if (thisLoader.attr('data-pageId')) {
      thisPageId = $(thisLoader).attr('data-pageId');
    }
    if (thisLoader.attr('data-page')) {
      thisPage = $(thisLoader).attr('data-page');
    }
    if (thisLoader.attr('data-pageSize')) {
      thisPageSize = $(thisLoader).attr('data-pageSize');
    }
    if (thisLoader.attr('data-viewer')) {
      thisFullArticle = $(thisLoader).attr('data-viewer');
    }
    if (thisLoader.attr('data-authorId')) {
      thisAuthorId = $(thisLoader).attr('data-authorId');
    }
    if (thisLoader.attr('data-category')) {
      thisCategory = $(thisLoader).attr('data-category');
    }
    if (thisLoader.attr('data-destination')) {
      thisDestination = $(thisLoader).attr('data-destination');
    }


    options = {
      pageId: thisPageId,
      page: thisPage,
      pageSize: thisPageSize,
      viewer: thisViewer,
      authorId: thisAuthorId,
      category: thisCategory,
      destination: thisDestination
    };
    return options;
  };
  Hiof.articleLoadData = function(options) {
    // If options are not defined
    if (typeof options === 'undefined') {
      // Get options from the initializer element
      Hiof.articleSetupOptions();
    }
    //console.log(options);



    // Setup the query
    var settings = $.extend({
      // These are the defaults.
      pageId: null,
      page: 1,
      pageSize: 20,
      viewer: 'feed',
      authorId: '',
      category: ''
    }, options);


    $.ajax({
      url: 'http://staging.hiof.no/api/v1/articles/',
      method: 'GET',
      async: false,
      dataType: 'json',
      data: settings,
      success: function(data) {
        //console.log("Success: ");
        //console.log(data);
        Hiof.articleDisplayView(data, settings);
      },
      error: function(data) {
        //console.log("Error: ");
        //console.log(data.responseText);
      }

    });
  };

  // This is our "rescue" method.
  function notFound() {
      $("#content").html("Fant ingen artikler.");
  }
  // Standard path
  Path.map("#/articles").to(function() {
    Hiof.articleLoadData();
  });


  // Path for specific article content 
  Path.map("#/articles/:article_id").to(function() {
    var options = {
      pageId: this.params.article_id,
      viewer: 'single'
    };

    Hiof.articleLoadData(options);
  });

  // Path for categorized content 
  Path.map("#/articles/category/:category_id").to(function() {
    var options = {
      category: this.params.category_id
    };
    Hiof.articleLoadData(options);
  });

  // Path for paged content 
  Path.map("#/articles/page/:page_id").to(function() {
    var options = {
      page: this.params.page_id
    };

    Hiof.articleLoadData(options);
  });

  // Load root path if no path is active
  Path.root("#/articles");

  // Error message
  Path.rescue(notFound);



  // on document load
  $(function() {

    if ($('.article-load').length) {
      Path.listen();
    }

    $('#content').on('click', '.article-more', function(e) {
      e.preventDefault();
      Hiof.articleLoadData();

    });

  });

})(window.Hiof = window.Hiof || {});
