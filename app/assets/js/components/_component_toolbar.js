var Hiof = Hiof || {};


Hiof.Toolbar = function() {



  

  if($("#index").length){

  }else{


    var lang = Hiof.Language.Check(),
      shareText;

    if (lang === "nor"){
      shareText = "Del eller skriv ut denne siden";
    }else{
      shareText = "Share or print this page";
    }

    var footerElement = document.createElement('footer'),
        headerElement = document.createElement('header'),
        heading = document.createElement('h2'),
        menu = document.createElement('menu');


    $(footerElement).addClass('lo-full');
    $(headerElement).addClass('lo-full');
    $(heading).text(shareText);
    $(menu).addClass('lo-full').attr('id', 'toolbar');


    $(headerElement).append($(heading) , $(menu));
    $(footerElement).append($(headerElement));



    $("#main").append($(footerElement));
  }
};



Hiof.Toolbar.Print = function() {

    if ($("#toolbar").length) {

        var lang = Hiof.Language.Check(),
            printText,
            printThisPage;

        if (lang === "nor") {
            printText = "Print";
            printThisPage = "Print denne siden";
        } else {
            printText = "Print";
            printThisPage = "Print this page";
        }



        var button = '<li><button id="print-page" class="btn btn-primary btn-line" onclick="javascript:window.print()" title="' + printThisPage + '">' + printThisPage + '</button></li>';
        $("#toolbar").append(button);
        svgPrint = Hiof.getSvgIcon("print");
        //console.log(svgFacebook);
        if(!$("html").hasClass("lt-ie10")){
          $("#print-page").html("").addClass("btn-icon").append(svgPrint).prepend('<span class="helper-text">' + printText + '</span>');
        }
        
    }
};


Hiof.Toolbar.SocialShare = function() {

    if ($("#toolbar").length) {

        var lang = Hiof.Language.Check(),
            facebook = "Facebook",
            twitter = "Twitter",
            sharePage;

        if (lang === "nor") {
            sharePage = "Del på ";
        } else {
            sharePage = "Share page on ";
        }


 


        var socialMenu = '<li><button id="social-facebook" class="btn btn-primary btn-line" onclick="javascript:Hiof.Share.Facebook()">' + sharePage + facebook + '</button><li>';
        socialMenu += '<li><button id="social-twitter" class="btn btn-primary btn-line" onclick="javascript:Hiof.Share.Twitter()">' + sharePage + twitter + '</button><li>';

        $("#toolbar").append(socialMenu);

        svgFacebook = Hiof.getSvgIcon("facebook");
        svgTwitter = Hiof.getSvgIcon("twitter");
        //console.log(svgFacebook);
        if(!$("html").hasClass("lt-ie10")){
          $("#social-facebook").html("").addClass("btn-icon").append(svgFacebook).prepend('<span class="helper-text">' + sharePage + facebook + '</span>');
          $("#social-twitter").html("").addClass("btn-icon").append(svgTwitter).prepend('<span class="helper-text">' + sharePage + twitter + '</span>');
        }

        //$("#social-twitter").append(svgTwitter);
    }
};
