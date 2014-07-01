// Defualt namespace
var Hiof = Hiof || {};


Hiof.FadeInContent = function() {
    var toTop = Hiof.Options.distanceToTop;
    $('.fade-in').each(function(i) {

        var bottom_of_object = $(this).position().top + ($(this).outerHeight() / 2),
            bottom_of_window = toTop + $(window).height(),
            breakbpoint = $(this).position().top + 200;



        //console.log(breakbpoint);

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object || bottom_of_window > breakbpoint) {

            $(this).animate({
                'opacity': '1'
            }, 500);

        }

    });
};
