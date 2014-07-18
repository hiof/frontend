
var Hiof = Hiof || {};

Hiof.CoverPhoto = {};




Hiof.CoverPhoto.GenerateMarkup = function(){
  var photoWrapper = '<div class="cover-inline" data-id="' + randomEntry.id + '"><p>&ldquo;' + randomEntry.text + '&rdquo;</p></div>';
  if($(".cover-inline").length){

  }
};

Hiof.CoverPhoto.Show = function(){
//  if(){}
};






Hiof.CoverPhoto.FindFoto = function() {
  //var category = category;
  $.getJSON("/assets/js/data/cover-photo.json", function(data) {

    var entries = data;

    //var randomEntry = data.cover[Math.floor(Math.random()*data.cover.length)];

    //if (randomEntry.id == quoteId){
    //  //console.log("Random entry was equal");
    //  randomEntry.id--;
    //  if (randomEntry.id == "0"){
    //    //console.log("Random entry turned zero");
    //    randomEntry.id = "3";
    //    //console.log(".. But is now: " + randomEntry.id);
    //  }
    //}
    //console.log(entries);
    //var quote = '<div class="cover-inline" data-id="' + randomEntry.id + '"><p>&ldquo;' + randomEntry.text + '&rdquo;</p></div>';
    //$('#content').append(quote);
    //$('.cover-inline').addClass("show");
  }).done(function(data){
    console.log(data.cover);
  });
};
