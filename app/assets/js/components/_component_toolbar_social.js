var Hiof = Hiof || {};


Hiof.Toolbar.SocialShare = function() {

    if ($("#toolbar").length) {
        var socialMenu = '<li><menu id="social">';
        socialMenu += '<button id="social-facebook" class="btn" onclick="javascript:Hiof.Share.Facebook()">Facebook</button>';
        socialMenu += '<button id="social-twitter" class="btn" onclick="javascript:Hiof.Share.Twitter()">Twitter</button>';
        socialMenu += '</menu><li>';

        $("#toolbar").append(socialMenu);

        svgFacebook = Hiof.getSvgIcon("facebook");
        svgTwitter = Hiof.getSvgIcon("twitter");
        //console.log(svgFacebook);

        $("#social-facebook").html("").addClass("btn-icon btn-facebook").append(svgFacebook).prepend('<span class="helper-text">Del på facebook</span>');
        $("#social-twitter").html("").addClass("btn-icon btn-facebook").append(svgTwitter).prepend('<span class="helper-text">Del på twitter</span>');
        //$("#social-twitter").append(svgTwitter);
    } else {

    }
};
