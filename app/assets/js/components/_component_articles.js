



(function(Hiof, undefined) {



  Hiof.articleDisplayView = function(data, options) {
    var templateSource;


    if (options.viewer === 'single') {
      templateSource = $("#article-post-single").html();
    } else if(options.viewer === 'feed'){
      templateSource = $("#article-posts").html();
    }else {
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
    }else{
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
  Hiof.articleSetupOptions = function(){
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

    if (typeof options === 'undefined') {

      Hiof.articleSetupOptions();
      //var thisLoader = $('.article-load'),
      //    thisPageId = null,
      //    thisPage = 1,
      //    thisPageSize = 20,
      //    thisViewer = false,
      //    thisAuthorId = '',
      //    thisCategory = '',
      //    thisDestination = '';
      //if (thisLoader.attr('data-pageId')) {
      //  thisPageId = $(thisLoader).attr('data-pageId');
      //}
      //if (thisLoader.attr('data-page')) {
      //  thisPage = $(thisLoader).attr('data-page');
      //}
      //if (thisLoader.attr('data-pageSize')) {
      //  thisPageSize = $(thisLoader).attr('data-pageSize');
      //}
      //if (thisLoader.attr('data-viewer')) {
      //  thisFullArticle = $(thisLoader).attr('data-viewer');
      //}
      //if (thisLoader.attr('data-authorId')) {
      //  thisAuthorId = $(thisLoader).attr('data-authorId');
      //}
      //if (thisLoader.attr('data-category')) {
      //  thisCategory = $(thisLoader).attr('data-category');
      //}      
      //if (thisLoader.attr('data-destination')) {
      //  thisDestination = $(thisLoader).attr('data-destination');
      //}
      //
      //
      //options = {
      //  pageId: thisPageId,
      //  page: thisPage,
      //  pageSize: thisPageSize,
      //  viewer: thisViewer,
      //  authorId: thisAuthorId,
      //  category: thisCategory,
      //  destination: thisDestination
      //};
    }




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


    //var query = 'http://staging.hiof.no/api/v1/articles.php';
    //var query = "http://api.dev/v1/articles/";
    $.ajax({
      url: 'http://staging.hiof.no/api/v1/articles.php',
      method: 'GET',
      //dataType: 'json',
      async: false,
      dataType: 'json',
      //contentType: 'application/json; charset=utf-8',
      data: settings,
      success: function(data) {
        //console.log("Success: ");
        //console.log(data);
        //var myData = jQuery.parseJSON(data);
        //console.log(myData);
        Hiof.articleDisplayView(data, settings);
      },
      error: function(data) {
        console.log("Error: ");
        console.log(data.responseText);
        //var myData = jQuery.parseJSON(data.responseText);
        //LOAD_ARTICLES.handlerData(data.responseText, settings.fullArticle);
      }

    });
  };







  // This example makes use of the jQuery library.

  // The examples in this document work with both the HTML5 History API and the Hashtag
  // methods provided by PathJS.  For a wider range of compatibility, these examples
  // use the Hashtag.

  // If you have not yet read the "Hashtag Basics" and "HTML5 Basics" examples yet, I
  // strongly urge you to do so now.


  // This is our "rescue" method.
  function notFound() {
    $("#content").html("404 Not Found");
  }

  Path.map("#/articles").to(function() {

    Hiof.articleLoadData();
    //$("#output .content").html("<a href='#/users/1'>Mike Trpcic</a><a href='#/users/2'>Garry Whitmore</a><a href='#/users/3'>SlayerS`Boxer`</a>");
  });

  // This is an example of a parameterized route. This route will match things such as
  // "#/users/1", "#/users/500", and "#/users/mike".  Inside the action of that route,
  // you have access to the parameters via the `this.params` object.
  Path.map("#/articles/:post_id").to(function() {
    var options = {
      pageId: this.params.post_id,
      viewer: 'single'
        //pageSize: 1
    };

    Hiof.articleLoadData(options);
    //$("#output .content").html("You selected the user with ID: " + this.params.user_id);
  });
  Path.map("#/articles/category/:category_id").to(function() {
    var options = {
      category: this.params.category_id
        //fullArticle: true
        //pageSize: 1
    };
    //console.log();
    Hiof.articleLoadData(options);
    //$("#output .content").html("You selected the user with ID: " + this.params.user_id);
  });

  Path.map("#/articles/page/:page_id").to(function() {
    var options = {
      page: this.params.page_id
        //fullArticle: true
        //pageSize: 1
    };

    Hiof.articleLoadData(options);
    //$("#output .content").html("You selected the user with ID: " + this.params.user_id);
  });


  //// This is a route with optional components.  Optional components in a route are contained
  //// within brackets.  The route below will match both "#/about" and "#/about/author".
  //Path.map("#/about(/author)").to(function(){
  //    $("#output .content").html("About & About/Author share a route!");
  //});
  //
  //// This route is an example of execution halting and the filter chain.  You can assign 
  //// multiple "enter" methods to any given route.  You can assign them as an array, or by
  //// calling the `enter` method multiple times.  When executing the route, PathJS will go
  //// through your enter methods in the order they were assigned.  If at any point one of
  //// these methods explicitly returns false, execution is halted and the route is never 
  //// hit.  In the example below, we halt execution, and the actual action of the "#/contact"
  //// route is never invoked.
  //Path.map("#/contact").to(function(){
  //    $("#output .content").html("Contact");
  //}).enter([
  //    function(){
  //        $("#output .content").html("This will work.");
  //    },
  //    function(){
  //        $("#output .content").append("Execution Halted!");
  //        return false;
  //    }
  //]);

  Path.root("#/articles");

  Path.rescue(notFound);









  $(function() {

    if ($('.article-load').length) {
      Path.listen();
    }

    //if (window.location.hash) {
    //} else {
    //  if ($('#article-load').length) {
    //    var options = {
    //      //fullArticle: true
    //    };
    //    
    //    Hiof.loadArticleData(options);
    //  }
    //}


    $('#content').on('click', '.article-more', function(e) {
      e.preventDefault();
      Hiof.articleLoadData();

    });

    $('#content').on('click', '.article-entry a', function(e) {
      //e.preventDefault();

      //var link = this.href;
      //console.log(link);
      //
      //if (history.pushState) {
      //  history.pushState(null, null, viewSingle);
      //} else {
      //  location.hash = viewSingle;
      //}
      //
      //
      ////var articleId = $(this).attr('data-article-id'),
      ////  viewSingle = '#viewSingle-' + articleId;
      //var options = {
      //  pageId: articleId,
      //  fullArticle: true,
      //  pageSize: 1
      //};
      //console.log(articleId);
      //Hiof.loadArticleData(options);

    });

  });

})(window.Hiof = window.Hiof || {});
