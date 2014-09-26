var HIOF = Hiof || {};


var ARTICLES = (function() {

  


  Options = {
        page: 1,
        pageSize: 20
  };
  var opt = {};
  getArticles = function(opt){
      $.getJSON("http://app.dev/v1/articles/", function(data) {
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
        for (var i = data.length - 1; i >= 0; i--) {
          console.log(data[i]);
        }
        console.log(data);
        //$('.cover-quote').fadeIn("slow");
      }).fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus); });
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