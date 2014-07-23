
var Hiof = Hiof || {};

Hiof.CoverPhoto = {};


Hiof.CoverPhoto.AddCoverPhotoToPage = function (){
  var pageType = $("#main").data("page-category"),
      entry;
  
  //onsole.log(pageType);

  if(typeof pageType === "undefined"){
    //console.log('pageType was undefined, default to "page"');
    pageType = "page";
  }





  // Load the data
  $.getJSON("/assets/js/data/cover-photo.json", function(data) {
      // Get data from a random entry based on the pageType
      //console.log(data.cover[pageType]);

      var entriesInCategory = data.cover[pageType],
          totalEntries = Object.keys(entriesInCategory).length,
          randomEntry = entriesInCategory[Math.floor(Math.random()*totalEntries)];
      
      // Set the entry to be the randomEntry data
      //entry = randomEntry;

      // Callback to generate the content
      Hiof.CoverPhoto.GenerateMarkup(randomEntry);

  });


};





Hiof.CoverPhoto.GenerateMarkup = function(data){
  var photoWrapper;

  photoWrapper = '<div id="cover-photo" class="cover-inline initial" data-cover-photo-blurred="' + data[1200]  + '" style="background-image:url(' + data[1200] + ')"></div>';

  if(Hiof.Options.windowWidth > 650){

  }else if (Hiof.Options.windowWidth > Hiof.Options.navigationBreakpoint){
    
  }
  if((Hiof.Options.windowWidth > 900)){
    //console.log("large view inc.");
    
  }
  //console.log(data[1200]);
  //var imageUrl = data[1200] + "";
  
  $('#main').prepend(photoWrapper);
  //return photoWrapper;
};

