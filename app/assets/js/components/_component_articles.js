//var HIOF = Hiof || {};


(function(Hiof, undefined) {








    Hiof.handlerData = function(data, singleView) {
      var templateSource;
      if (singleView) {
        templateSource = $("#article-post-single").html();
      } else {
        templateSource = $("#article-posts").html();
      }
      //console.log("Singleview = " + singleView);

      var template = Handlebars.compile(templateSource),
        studentHTML = template(data);
      //console.log(template);
      $('#content').html(studentHTML);
      if (!singleView) {
        // Fix the layout
        //Hiof.LayoutHelper();
        //Hiof.EqualHeight($(".article"));
      }
    };
    Hiof.loadArticleData = function(options) {

      // Setup the query
      var settings = $.extend({
        // These are the defaults.
        page: 1,
        pageSize: 20,
        fullArticle: false,
        category: ""
      }, options);


      var query = 'http://staging.hiof.no/api/v1/articles.php';
      //var query = "http://api.dev/v1/articles/";
      $.ajax({
        url: query,
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
          LOAD_ARTICLES.handlerData(data, settings.fullArticle);
        },
        error: function(data) {
          console.log("Error: ");
          console.log(data.responseText);
          //var myData = jQuery.parseJSON(data.responseText);
          //LOAD_ARTICLES.handlerData(data.responseText, settings.fullArticle);
        },
        done: function(data){
          console.log("Done: ");
          console.log(data);
        }

      });
    };



  $(function() {
    if ($('#article-load').length) {
      var options = {
        //fullArticle: true
      };


      Hiof.loadArticleData(options);
    }
  });

})(window.Hiof = window.Hiof || {});
