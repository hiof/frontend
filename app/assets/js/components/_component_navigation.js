var Hiof = Hiof || {};




// This page use slideout-navigation functions from 
// the slideout vendor plugin (defined in bower.json)

Hiof.ToggleMobileClass = function(){
    $("#body").toggleClass("mobile");
};

$(function() {

    //console.log("Hello world from navigation.js");


    //$('#body').bind('DOMSubtreeModified', function(e) {
    //      alert('class changed');
    //});



    $(document).on("click touchstart", ".mobile-pages", function(e) {
        e.preventDefault();
        toggleLeftNavigation();
    });


    // Page navigation
    $(".nav-page a").on("click", function(e) {
        var url = $(this).attr("href");
        if (url.indexOf("#") != -1) {
            console.log("Url has a Hash");
            e.preventDefault();
            $.scrollTo($(url), 500, {
                axis: 'y',
                offset: {
                    top: -62
                }
            });
        } else {
            console.log("URL does not contain a hash");
        }
    });

    //$(".nav-page a").scrollTo( $('div li:eq(14)'), 800 );


});
