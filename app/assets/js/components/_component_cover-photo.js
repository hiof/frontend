
var Hiof = Hiof || {};

Hiof.CoverPhoto = {};


Hiof.CoverPhoto.AddCoverPhotoToPage = function (){
  var pageType = $("#main").data("page-category"),
      entry;
  
  //onsole.log(pageType);

  if(typeof pageType === "undefined" || pageType === ""){
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

//Hiof.CoverPhoto.GetImageData = function(pageType){
//
//    $.getJSON("/assets/js/data/cover-photo.json", function(data) {
//        // Get data from a random entry based on the pageType
//        //console.log(data.cover[pageType]);
//
//        var entriesInCategory = data.cover[pageType],
//            totalEntries = Object.keys(entriesInCategory).length,
//            randomEntry = entriesInCategory[Math.floor(Math.random()*totalEntries)];
//        
//        // Set the entry to be the randomEntry data
//        //entry = randomEntry;
//
//        // Callback to generate the content
//        Hiof.CoverPhoto.GenerateMarkup(randomEntry);
//    });
//};


Hiof.CoverPhoto.GenerateMarkup = function(data){

  var coverWrapper = document.createElement('div'),
        photoWrapper = $(coverWrapper).clone(),
        blurWrapper = $(coverWrapper).clone(),
        windowWidth = $(window).width();



  $(coverWrapper).addClass("cover").attr("id", "cover");
  $(photoWrapper).addClass("cover-photo cover-photo-normal");
  $(blurWrapper).addClass("cover-photo cover-photo-blur");

  //$.each(data, function(item){
  //  if (item === "400"){
  //    console.log(item.normal);
  //  }
  //});

  if(windowWidth < 400){
      $(coverWrapper).addClass('height-200');
      $(photoWrapper).css('background-image', 'url(' + data[400].normal + ')').addClass('height-200');
      $(blurWrapper).css('background-image', 'url(' + data[400].blurred + ')').addClass('height-200');

  }else if ((windowWidth > 400) && (windowWidth < 500)){
      $(coverWrapper).addClass('height-200');
      $(photoWrapper).css('background-image', 'url(' + data[500].normal + ')').addClass('height-200');
      $(blurWrapper).css('background-image', 'url(' + data[500].blurred + ')').addClass('height-200');
  }else if ((windowWidth > 500) && (windowWidth < 600)){
      $(coverWrapper).addClass('height-300');
      $(photoWrapper).css('background-image', 'url(' + data[600].normal + ')').addClass('height-300');
      $(blurWrapper).css('background-image', 'url(' + data[600].blurred + ')').addClass('height-300');
   
  }else if ((windowWidth > 600) && (windowWidth < 800)){
      $(coverWrapper).addClass('height-300');
      $(photoWrapper).css('background-image', 'url(' + data[800].normal + ')').addClass('height-300');
      $(blurWrapper).css('background-image', 'url(' + data[800].blurred + ')').addClass('height-300');
     
  }else if ((windowWidth > 800) && (windowWidth < 1000)){
      $(coverWrapper).addClass('height-600');
      $(photoWrapper).css('background-image', 'url(' + data[1000].normal + ')').addClass('height-600');
      $(blurWrapper).css('background-image', 'url(' + data[1000].blurred + ')').addClass('height-600');
    
  }else if ((windowWidth > 1000) && (windowWidth < 1200)){
      $(coverWrapper).addClass('height-600');
      $(photoWrapper).css('background-image', 'url(' + data[1200].normal + ')').addClass('height-600');
      $(blurWrapper).css('background-image', 'url(' + data[1200].blurred + ')').addClass('height-600');
      
  }else if ((windowWidth > 1200) && (windowWidth < 1600)){
      $(coverWrapper).addClass('height-600');
      $(photoWrapper).css('background-image', 'url(' + data[1600].normal + ')').addClass('height-600');
      $(blurWrapper).css('background-image', 'url(' + data[1600].blurred + ')').addClass('height-600');
     
  }else if (windowWidth > 1600){
      $(coverWrapper).addClass('height-600');
      $(photoWrapper).css('background-image', 'url(' + data[2000].normal + ')').addClass('height-600');
      $(blurWrapper).css('background-image', 'url(' + data[2000].blurred + ')').addClass('height-600');
  }
  $(coverWrapper).append(photoWrapper).append(blurWrapper);
  //console.log(data[1200]);
  //var imageUrl = data[1200] + "";
  
  $('#main').prepend(coverWrapper);
  //return photoWrapper;
};

