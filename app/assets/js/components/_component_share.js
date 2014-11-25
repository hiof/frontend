(function(Hiof, undefined) {


    //Hiof.Share = {};


    shareFacebook = function() {
        var url = escape(document.URL),
            shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        //console.log(shareUrl);
        window.open(shareUrl, '_blank');
    };



    shareTwitter = function() {
        var url = escape(document.URL),
            shareUrl = "https://twitter.com/share?url=" + url;
        //console.log(shareUrl);
        window.open(shareUrl, '_blank');
    };
    shareLinkedIn = function() {
        var lang = Hiof.languageCheck(),
            source;

            if (lang === "nor") {
                source = "Høgskolen i Østfold";
            } else {
                source = "Østfold University College";
            }

        var url = escape(document.URL),
            title = escape($('#content header *').text()),
            description =  escape($("meta[name=Description]").attr('content')),
            shareUrl = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + '&title=' + title + '&source=' + source + '&summary=' + description;
        window.open(shareUrl, '_blank');
    };



    // Expose functions to the window
    window.Hiof.shareFacebook = shareFacebook;
    window.Hiof.shareTwitter = shareTwitter;
    window.Hiof.shareLinkedIn = shareLinkedIn;


})(window.Hiof = window.Hiof || {});
