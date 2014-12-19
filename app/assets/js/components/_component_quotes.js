(function(Hiof, undefined) {

  quotes = function(quoteId) {

    $.getJSON("/assets/js/data/quotes.json", function(data) {
      var randomEntry = data.quotes[Math.floor(Math.random() * data.quotes.length)];

      if (randomEntry.id == quoteId) {
        //console.log("Random entry was equal");
        randomEntry.id--;
        if (randomEntry.id == "0") {
          //console.log("Random entry turned zero");
          randomEntry.id = "3";
          //console.log(".. But is now: " + randomEntry.id);
        }
      }
      var quote = '<blockquote class="cover-quote" data-id="' + randomEntry.id + '""><a href="' + randomEntry.url + '"><p>&ldquo;' + randomEntry.text + '&rdquo;</p><footer><cite>- ' + randomEntry.cite + '</cite></footer></a></blockquote>';
      $('#content').append(quote);
      $('.cover-quote').fadeIn("slow");
    });
  };

  $(function() {
    if ($('#studie').length) {
      $("html").addClass("quote");
    }

    // Check if the page should use quotes
    if ($('html.quote').length) {
      // Add Quotes
      quotes();
      // Refresh Quotes
      window.setInterval(function() {
        $(".cover-quote").fadeOut(500, function() {
          var quoteId = $(this).data("id");
          //console.log(quoteId);
          $(this).remove();
          quotes(quoteId);
        });
      }, 100000);
    }
    $(window).scroll(function() {
      if ((Hiof.Options.distanceToTop === 0) || (Hiof.Options.distanceToTop < 0) ) {
        $(".cover-quote").css("opacity", 100);
      }else{
        $(".cover-quote").css("opacity", (100 / (Hiof.Options.distanceToTop * 2)));
      }
    });
  });

})(window.Hiof = window.Hiof || {});
