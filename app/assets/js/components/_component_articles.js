(function(Hiof, undefined) {



  Hiof.articleDisplayView = function(data, options) {
    console.log(options);
    var templateSource;


    //if (options.template === 'single') {
    //  templateSource = $("#article-post-single").html();
    //} else if (options.template === 'feed') {
    //  templateSource = $("#article-posts").html();
    //} else {
    //  templateSource = $("#article-posts").html();
    //}
    if (typeof options.template === 'undefined' || options.template === '') {
      //templateSource = $("#article-posts").html();

      templateSource = Hiof.Templates['articles/posts'];
      //console.log('Template:' + templateSource);
    }else{
      //console.log(options.template);
      //templateSource = $(options.template).html();
      templateSource = Hiof.Templates['articles/' + options.template];
    }


    //console.log("Singleview = " + singleView);

    //var template = Handlebars.compile(templateSource),

    var studentHTML = templateSource(data);
    //console.log(template);

    if (!!options.destination) {
      //var articleCount = $('.article').length;
      //console.log("options.destination has something: " + options.destination);
      $(options.destination).append(studentHTML);
      //Hiof.EqualHeight($(".article"));
    } else {
      //console.log("options.destination is empty");
      $('#content').html(studentHTML);
    }
    //if (!singleView) {
    //  // Fix the layout
    //  Hiof.LayoutHelper();
    //  //Hiof.EqualHeight($(".article"));
    //}


    //$.scrollTo($("#content"), 500, {
    //  axis: 'y',
    //  offset: {
    //    top: -80
    //  }
    //});


  };
  Hiof.articleSetupOptions = function(el) {
    var thisLoader;
    if (typeof el === 'undefined') {
      thisLoader = $('.article-load');
    }else{
      thisLoader = $(el);
    }


    var thisPageId = null,
        thisPage = 1,
        thisPageSize = 20,
        thisTemplate = '',
        thisAuthorId = '',
        thisCategory = '',
        thisDestination = '';
    if (thisLoader.attr('data-pageId')) {
      thisPageId = thisLoader.attr('data-pageId');
    }
    if (thisLoader.attr('data-page')) {
      thisPage = thisLoader.attr('data-page');
    }
    if (thisLoader.attr('data-pageSize')) {
      thisPageSize = thisLoader.attr('data-pageSize');
    }
    if (thisLoader.attr('data-template')) {
      thisTemplate = thisLoader.attr('data-template');
    }
    if (thisLoader.attr('data-authorId')) {
      thisAuthorId = thisLoader.attr('data-authorId');
    }
    if (thisLoader.attr('data-category')) {
      thisCategory = thisLoader.attr('data-category');
    }
    if (thisLoader.attr('data-destination')) {
      thisDestination = thisLoader.attr('data-destination');
    }
    //console.log(thisDestination);

    options = {
      pageId: thisPageId,
      page: thisPage,
      pageSize: thisPageSize,
      template: thisTemplate,
      authorId: thisAuthorId,
      category: thisCategory,
      destination: thisDestination
    };
    return options;
  };
  Hiof.articleLoadData = function(options, element) {
    //console.log(element);
    // If options are not defined
    if (typeof options === 'undefined' || options === null) {
      // Get options from the initializer element
      //console.log("options is undefined");
      options = Hiof.articleSetupOptions(element);
    }
    //console.log(options);



    // Setup the query
    var settings = $.extend({
      // These are the defaults.
      pageId: null,
      page: 1,
      pageSize: 20,
      template: 'posts',
      authorId: '',
      category: '',
      destination: ''
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
    $('.article-load').each(function(){
      //console.log(this);
      Hiof.articleLoadData(null, this);
    });
  });


  // Path for specific article content 
  Path.map("#/articles/:article_id").to(function() {
    var options = {
      pageId: this.params.article_id,
      template: 'post-single'
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
