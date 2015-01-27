(function(Hiof, undefined) {


  var scrollDest = false;
  Hiof.articleDisplayView = function(data, options) {
    //console.log(options);
    var templateSource;



    //if (options.template === 'single') {
    //  templateSource = $("#article-post-single").html();
    //} else if (options.template === 'feed') {
    //  templateSource = $("#article-posts").html();
    //} else {
    //  templateSource = $("#article-posts").html();
    //}
    //if (typeof options.template === 'undefined' || options.template === '') {
    //  //templateSource = $("#article-posts").html();
    //  
    //  templateSource = Hiof.Templates['articles/posts'];
    //  //console.log('Template:' + templateSource);
    //} else 

    if(options.template === 'posts'){
      templateSource = Hiof.Templates['articles/posts'];
    } else if(options.template === 'single'){
      templateSource = Hiof.Templates['articles/post-single'];
    }else{
      templateSource = Hiof.Templates['articles/posts'];
      ////console.log(options.template);
      ////templateSource = $(options.template).html();
      //var thisView = 'articles/' + options.template + '';
      //templateSource = Hiof.Templates[thisView];
    }


    //console.log("Singleview = " + singleView);

    //var template = Handlebars.compile(templateSource),

    var markup = templateSource(data);
    //console.log(template);

    if (!!options.destination) {
      //var articleCount = $('.article').length;
      //console.log("options.destination has something: " + options.destination);
      if (options.addType === 'append') {
        $(options.destination).append(markup);
      }else{
        $(options.destination).html(markup);
      }

      Hiof.articleScrollTo(options.destination);

    } else {
      //console.log("options.destination is empty");
      $('#content').html(markup);
      var scrollDestEl = "#content";
      Hiof.articleScrollTo(scrollDestEl);
    }
    //if (!singleView) {
    //  // Fix the layout
    //  Hiof.LayoutHelper();
    //  //Hiof.EqualHeight($(".article"));
    //}





  };

  Hiof.articleScrollTo = function(destination){
    if (scrollDest) {
      $.scrollTo($(destination), 500, {
        axis: 'y',
        offset: {
          top: -80
        }
      });
    }
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
        thisTemplate = 'posts',
        thisAuthorId = '',
        thisCategory = '',
        thisDestination = '',
        thisArticleLoClass = 'lo-half',
        thisAddType = '',
        thisDestinationAddress = null;
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
    if (thisLoader.attr('data-article-lo-class')) {
      thisArticleLoClass = thisLoader.attr('data-article-lo-class');
    }
    if (thisLoader.attr('data-article-add-type')) {
      thisAddType = thisLoader.attr('data-article-add-type');
    }
    if (thisLoader.attr('data-article-destination-address')) {
      thisDestinationAddress = thisLoader.attr('data-article-destination-address');
    }
    //console.log(thisDestination);

    options = {
      pageId: thisPageId,
      page: thisPage,
      pageSize: thisPageSize,
      template: thisTemplate,
      authorId: thisAuthorId,
      category: thisCategory,
      destination: thisDestination,
      articleLoClass: thisArticleLoClass,
      addType: thisAddType,
      destinationAddress: thisDestinationAddress
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
      destination: '',
      articleLoClass: "lo-half",
      addType: '',
      destinationAddress: null
    }, options);


    $.ajax({
      url: 'http://hiof.no/api/v1/articles/',
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

  Hiof.updateAnalytics = function(){
    //ga('set', 'page', document.location.href);
    //ga('send', 'pageview');
  };


  // Standard path

  Path.map("#/articles").to(function() {
    //scrollDest = false;
    $('.article-load').each(function(){
      //console.log(this);
      Hiof.articleLoadData(null, this);
    });
  });


  // Path for specific article content 
  Path.map("#/articles/:article_id").enter(Hiof.updateAnalytics).to(function() {
    scrollDest = true;
    var thisDestination = '';
    if ($('.article-load').attr('data-destination')) {
      thisDestination = $('.article-load').attr('data-destination');
    }
    var options = {
      pageId: this.params.article_id,
      template: 'single',
      destination: thisDestination
    };
    Hiof.articleLoadData(options);
  });

  // Path for categorized content 
  Path.map("#/articles/category/:category_id").enter(Hiof.updateAnalytics).to(function() {
    scrollDest = true;
    var thisDestination = '';
    if ($('.article-load').attr('data-destination')) {
      thisDestination = $('.article-load').attr('data-destination');
    }
    var options = {
      category: this.params.category_id,
      destination: thisDestination
    };
    Hiof.articleLoadData(options);
  });

  // Path for paged content 
  Path.map("#/articles/page/:page_id").enter(Hiof.updateAnalytics).to(function() {
    scrollDest = true;
    var thisDestination = '';
    if ($('.article-load').attr('data-destination')) {
      thisDestination = $('.article-load').attr('data-destination');
    }

    var options = {
      page: this.params.page_id,
      destination: thisDestination
    };

    Hiof.articleLoadData(options);
  });


  initatePathArticle = function(){
    // Load root path if no path is active
    Path.root("#/articles");
  };







  // on document load
  $(function() {

    if ($('.article-load').length) {
      initatePathArticle();
      Path.listen();

    }

    $('#content').on('click', '.article-more', function(e) {
      e.preventDefault();
      Hiof.articleLoadData();

    });

  });

})(window.Hiof = window.Hiof || {});
