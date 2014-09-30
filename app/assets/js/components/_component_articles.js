//var HIOF = Hiof || {};


var ARTICLES = (function() {

  


  var options = {
        page: 1,
        pageSize: 20
  };
  var opt = {};




  // Template:
  //<script id="simple-template" type="text/x-handlebars-template">
  //    <h1>{{title}}</h1>
  //    
  //      {{entry}}
  //    
  //</script>

  //var head= document.getElementsByTagName('head')[0];
  //var script= document.createElement('script');
  //script.type= 'text/javascript';
  //script.src= 'helper.js';
  //head.appendChild(script);



  getArticles = function(opt){



      // Extract the text from the template .html() is the jquery helper method for that
      var raw_template = $('#article-posts').html();
      // Compile that into an handlebars template
      var template = Handlebars.compile(raw_template);
      // Retrieve the placeHolder where the Posts will be displayed 
      var placeHolder = $("#content");


      // Setup the query

        // Get data from the load button



      var query = "http://api.dev/v1/articles/";




      $.getJSON(query,function(data,status,xhr){
        $.each(data.posts,function(index,element){
          // Generate the HTML for each post
          var html = template(element);
          // Render the posts into the page
          placeHolder.append(html);
        });
      });


      /*
      $.getJSON(query, function(data) {
        //var randomEntry = data.quotes[Math.floor(Math.random()*data.quotes.length)];
        //
        //if (randomEntry.id == quoteId){
        //  //console.log("Random entry was equal");
        //  randomEntry.id--;
        //  if (randomEntry.id == "0"){
        //    //console.log("Random entry turned zero");
        //    randomEntry.id = "3";
        //    //console.log(".. But is now: " + randomEntry.id);
        //  }
        //}
        //for (var i = data.length - 1; i >= 0; i--) {

          //for (var i = data.posts.length - 1; i >= 0; i--) {


          //var post = document.createElement("article");



          data.posts.forEach(function(entry){
            var article = document.createElement("article"),
                articleId = entry.articleId,
                articleTitle = '<header><h3>' + entry.articleTitle +'</h3></header>',
                articlePublished = '',
                articleUpdated = '',
                articleImage = '<img src="' + entry.articleImage + '">',
                articleContentIntro = '<p class="lead-paragraph">' + entry.articleIntro + '</p>';
                articleContent = entry.articleContent;

            //console.log(entry.articleIntro);

            var articleMeta = '<p>Publisert den' + entry.published + ' av <a href="http://hiof.no/nor/om-hogskolen/sok-pa-sidene/profil/?&module=admin&displayitem=' + entry.authorId + '">' + entry.authorName + '</a></p>',
                articleLink = '<a href="http://hiof.no/nor/aktuelt/nyheter/?&module=news&displayitem=' + articleId + '"></a>';
            $(article).addClass('article article-entry article-vertical lo-half').attr('data-article-id', articleId).append(articleLink);
            $('a', article).append(articleImage, articleTitle, articleContentIntro);
            
            $(article).insertBefore('#content footer');  //.append(article);

            Hiof.LayoutHelper();
            Hiof.EqualHeight($(".article"));
          });




          //console.log(data.posts.length);
        //}
        //var currentNumber = this.Options,
        //    currentPage = this.options;

          //console.log(currentPage);

      //for(var i = )

        console.log(data);
        //$('.cover-quote').fadeIn("slow");
      }).fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus); });
  
      */
  };



  $(function() {
    if ($('#article-load').length) {
      getArticles();
    }
  });


  // Functions exported to the global space

  //Hiof.Articles.GetArticles(options) = getArticles(options);
  //var GetArticles = getArticles();

  //return {
  //  GetArticles
  //};
  

})();