var Hiof = Hiof || {};


Hiof.Toolbar = function() {


  var lang = Hiof.Language.Check(),
      shareText;

  if (lang === "nor"){
    shareText = "Del eller skriv ut denne siden";
  }else{
    shareText = "Share or print this page";
  }


  if($("#index").length){

  }else{
    $("#main").append('<footer class="lo-full"><header class="lo-full"><h3>' +  shareText + '</h3></header><menu id="toolbar" class="lo-full" type="toolbar"></menu></footer>');
  }
};



