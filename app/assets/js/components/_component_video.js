(function() {

  var Hiof = Hiof || {};

  Hiof.Video = {};


  Hiof.Video.InitiateEmbed = function(el){

    var videoUrl = $(el).attr("data-embed-url"),
        overlay = document.createElement("div");
        iframe = document.createElement("iframe");
        //iframeWithConent = $(iframe).attr({
        //  src: videoUrl,
        //  width: "600",
        //  height: "337"
        //  //frameborder: "0",
        //  //webkitallowfullscreen: "",
        //  //mozallowfullscreen: "",
        //  //allowfullscreen: ""
        //});
    $(overlay).addClass("video-fullscreen");

    $(iframe).attr({
      src: videoUrl,
      width: "600",
      height: "337",
      frameborder: "0",
      webkitallowfullscreen: "",
      mozallowfullscreen: "",
      allowfullscreen: ""
    });
    //console.log(iframe);

    $(overlay).append(iframe);
    $("#body").append(overlay);
    $(".video-fullscreen").fadeIn();
  };


  // Activate video overlay
  $(document).on("click", ".show-embed", function(e) {
    e.preventDefault();
    //console.log("Clicked...");
    //console.log(this);
    Hiof.Video.InitiateEmbed($(this));
  });  
  $(document).on("click touchstart", ".video-fullscreen", function(e) {
    e.preventDefault();
    $(this).remove();
  });

})();


//
//  <div class="video-fullscreen">
//
//    <iframe src="//player.vimeo.com/video/104905309" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//
//  </div>
