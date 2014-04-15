




Hiof.Toolbar.SocialShare = function(){

  var socialMenu = '<li><menu id="social">';
      socialMenu += '<button id="social-facebook" class="btn btn-facebook" onclick="javascript:Hiof.Share.Facebook()">Facebook</button>';
      socialMenu += '<button id="social-twitter" class="btn btn-twitter" onclick="javascript:Hiof.Share.Twitter()">Twitter</button>';
      socialMenu += '</menu><li>';



  $("#toolbar").append(socialMenu);


  // svgFacebook = Hiof.getSvgIcon("write");
  // svgTwitter = Hiof.getSvgIcon("twitter");


  //$("#social-facebook").append(svgFacebook);
  //$("#social-twitter").append(svgTwitter);

}; 


