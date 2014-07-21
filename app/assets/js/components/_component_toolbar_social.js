var Hiof = Hiof || {};


Hiof.Toolbar.SocialShare = function() {

        var facebook = "Facebook",
            twitter = "Twitter",
            sharePage;

      if (Hiof.Options.language === "nor"){
        sharePage = "Del på ";
      }else{
        sharePage = "Share page on ";
      }


    if ($("#toolbar").length) {
        var socialMenu = '<li><menu id="social">';
        socialMenu += '<button id="social-facebook" class="btn" onclick="javascript:Hiof.Share.Facebook()">' + facebook +'</button>';
        socialMenu += '<button id="social-twitter" class="btn" onclick="javascript:Hiof.Share.Twitter()">' + twitter + '</button>';
        socialMenu += '</menu><li>';

        $("#toolbar").append(socialMenu);

        svgFacebook = Hiof.getSvgIcon("facebook");
        svgTwitter = Hiof.getSvgIcon("twitter");
        //console.log(svgFacebook);

        $("#social-facebook").html("").addClass("btn-icon btn-facebook").append(svgFacebook).prepend('<span class="helper-text">' + sharePage + facebook + '</span>');
        $("#social-twitter").html("").addClass("btn-icon btn-facebook").append(svgTwitter).prepend('<span class="helper-text">' + sharePage + twitter + '</span>');
        //$("#social-twitter").append(svgTwitter);
    } else {

    }
};
