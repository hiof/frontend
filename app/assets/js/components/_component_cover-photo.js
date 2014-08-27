
var Hiof = Hiof || {};

Hiof.CoverPhoto = {};


Hiof.CoverPhoto.AddCoverPhotoToPage = function (){
  var pageType = $("#main").data("page-category"),
      windowWidth = $(window).width(),
      entry;
  
  //onsole.log(pageType);

  if(typeof pageType === "undefined" || pageType === ""){
    //console.log('pageType was undefined, default to "page"');
    pageType = "page";
  }



  if ((windowWidth <= Hiof.Options.navigationBreakpoint) && (pageType === "homepage")){
    // Add HiØ logo as the cover photo on Index

  }else if(windowWidth <= 420){
    // Dont add a cover-photo on the smallest screens 
  }else{
    // Add cover photo
    Hiof.CoverPhoto.GetImageData(pageType);
  }


  // Load the data
  //$.getJSON("/assets/js/data/cover-photo.json", function(data) {
  //    // Get data from a random entry based on the pageType
  //    //console.log(data.cover[pageType]);
  //    var entriesInCategory = data.cover[pageType],
  //        totalEntries = Object.keys(entriesInCategory).length,
  //        randomEntry = entriesInCategory[Math.floor(Math.random()*totalEntries)];
  //    // Set the entry to be the randomEntry data
  //    //entry = randomEntry;
  //    // Callback to generate the content
  //    Hiof.CoverPhoto.GenerateMarkup(randomEntry);
  //});

};

Hiof.CoverPhoto.GetImageData = function(pageType){

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

Hiof.CoverPhoto.GenerateMarkupBranding = function(){
  var coverWrapper = document.createElement('div'),
      logo;
};

Hiof.CoverPhoto.GenerateMarkup = function(data){

  var coverWrapper = document.createElement('div'),
        photoWrapper = $(coverWrapper).clone(),
        blurWrapper = $(coverWrapper).clone(),
        windowWidth = $(window).width(),
        elementHeight;



  $(coverWrapper).addClass("cover").attr("id", "cover");
  $(photoWrapper).addClass("cover-photo cover-photo-normal");
  $(blurWrapper).addClass("cover-photo cover-photo-blur");

  //$.each(data, function(item){
  //  if (item === "400"){
  //    console.log(item.normal);
  //  }
  //});

  if(windowWidth < 400){

      $(coverWrapper).addClass('height-' + data[400].imgHeight );
      $(photoWrapper).css('background-image', 'url(' + data[400].normal + ')').addClass('height-' + data[400].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[400].blurred + ')').addClass('height-' + data[400].imgHeight);

  }else if ((windowWidth > 400) && (windowWidth < 500)){
      $(coverWrapper).addClass('height-' + data[500].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[500].normal + ')').addClass('height-' + data[500].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[500].blurred + ')').addClass('height-' + data[500].imgHeight);
  }else if ((windowWidth > 500) && (windowWidth < 600)){
      $(coverWrapper).addClass('height-' + data[600].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[600].normal + ')').addClass('height-' + data[600].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[600].blurred + ')').addClass('height-' + data[600].imgHeight);
   
  }else if ((windowWidth > 600) && (windowWidth < 800)){
      $(coverWrapper).addClass('height-' + data[800].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[800].normal + ')').addClass('height-' + data[800].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[800].blurred + ')').addClass('height-' + data[800].imgHeight);
     
  }else if ((windowWidth > 800) && (windowWidth < 1000)){
      $(coverWrapper).addClass('height-' + data[1000].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[1000].normal + ')').addClass('height-' + data[1000].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[1000].blurred + ')').addClass('height-' + data[1000].imgHeight);
    
  }else if ((windowWidth > 1000) && (windowWidth < 1200)){
      $(coverWrapper).addClass('height-' + data[1200].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[1200].normal + ')').addClass('height-' + data[1200].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[1200].blurred + ')').addClass('height-' + data[1200].imgHeight);
      
  }else if ((windowWidth > 1200) && (windowWidth < 1600)){
      $(coverWrapper).addClass('height-' + data[1600].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[1600].normal + ')').addClass('height-' + data[1600].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[1600].blurred + ')').addClass('height-' + data[1600].imgHeight);
     
  }else if (windowWidth > 1600){
      $(coverWrapper).addClass('height-' + data[2000].imgHeight);
      $(photoWrapper).css('background-image', 'url(' + data[2000].normal + ')').addClass('height-' + data[2000].imgHeight);
      $(blurWrapper).css('background-image', 'url(' + data[2000].blurred + ')').addClass('height-' + data[2000].imgHeight);
  }
  $(coverWrapper).append(photoWrapper).append(blurWrapper);
  //console.log(data[1200]);
  //var imageUrl = data[1200] + "";
  
  $('#main').prepend(coverWrapper);
  //return photoWrapper;
};

