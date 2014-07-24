
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

  var coverWrapper = document.createElement('div'),
        photoWrapper = $(coverWrapper).clone(),
        blurWrapper = $(coverWrapper).clone();



  $(coverWrapper).addClass("cover").attr("id", "cover");
  $(photoWrapper).addClass("cover-photo cover-photo-normal");
  $(blurWrapper).addClass("cover-photo cover-photo-blur");

  //$.each(data, function(item){
  //  if (item === "400"){
  //    console.log(item.normal);
  //  }
  //});

  if(Hiof.Options.windowWidth < 400){
      $(photoWrapper).css('background-image', 'url(' + data[400].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[400].blurred + ')');

  }else if ((Hiof.Options.windowWidth > 400) && (Hiof.Options.windowWidth < 500)){
      $(photoWrapper).css('background-image', 'url(' + data[500].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[500].blurred + ')');
  }else if ((Hiof.Options.windowWidth > 500) && (Hiof.Options.windowWidth < 600)){
      $(photoWrapper).css('background-image', 'url(' + data[600].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[600].blurred + ')');
   
  }else if ((Hiof.Options.windowWidth > 600) && (Hiof.Options.windowWidth < 800)){
      $(photoWrapper).css('background-image', 'url(' + data[800].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[800].blurred + ')');
     
  }else if ((Hiof.Options.windowWidth > 800) && (Hiof.Options.windowWidth < 1000)){
      $(photoWrapper).css('background-image', 'url(' + data[1000].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[1000].blurred + ')');
    
  }else if ((Hiof.Options.windowWidth > 1000) && (Hiof.Options.windowWidth < 1200)){
      $(photoWrapper).css('background-image', 'url(' + data[1200].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[1200].blurred + ')');
      
  }else if ((Hiof.Options.windowWidth > 1200) && (Hiof.Options.windowWidth < 1600)){
      $(photoWrapper).css('background-image', 'url(' + data[1600].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[1600].blurred + ')');
     
  }else if (Hiof.Options.windowWidth > 1600){
      $(photoWrapper).css('background-image', 'url(' + data[2000].normal + ')');
      $(blurWrapper).css('background-image', 'url(' + data[2000].blurred + ')');
  
  }
  $(coverWrapper).append(photoWrapper).append(blurWrapper);
  //console.log(data[1200]);
  //var imageUrl = data[1200] + "";
  
  $('#main').prepend(coverWrapper);
  //return photoWrapper;
};

