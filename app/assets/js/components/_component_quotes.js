Hiof.Quotes = function(quoteId) {

  $.getJSON("/assets/js/data/quotes.json", function(data) {
    var randomEntry = data.quotes[Math.floor(Math.random()*data.quotes.length)];

    if (randomEntry.id == quoteId){
      //console.log("Random entry was equal");
      randomEntry.id--;
      if (randomEntry.id == "0"){
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

