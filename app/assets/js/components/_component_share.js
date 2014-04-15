
Hiof.Share = {};




Hiof.Share.Facebook = function(){
  var url = escape(document.URL),
      shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  //console.log(shareUrl);
  window.open(shareUrl,'_blank');
};


Hiof.Share.Twitter = function(){
  var url = escape(document.URL),
      shareUrl = "https://twitter.com/share?url=" + url;
  //console.log(shareUrl);
  window.open(shareUrl,'_blank');
};