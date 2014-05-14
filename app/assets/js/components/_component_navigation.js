var Hiof = Hiof || {};




// This page use slideout-navigation functions from 
// the slideout vendor plugin (defined in bower.json)



Hiof.HeaderToggle = function() {
    //console.log("viewportWidth is:" + viewportWidth);
    //console.log("Option.viewportWidth is:" + Hiof.Options.viewportWidth);

    if ($("html.cover").length) {
        if (Hiof.Options.windowWidth < Hiof.Options.navigationBreakpoint) {
            //console.log("mobile navigation is activated");
            $("#header").removeClass("light");
        } else {
            if (Hiof.Options.distanceToTop > Hiof.Options.distanceToTopBreakPoint) {
                $("#header").removeClass("light");
            } else {
                $("#header").addClass("light");
            }
        }
    }


};
Hiof.NavigationPageSection = function() {

    // TODO: add check for #footer position
    var $el = $("#nav-page"),
        thisElementheight = $el.outerHeight(),
        $parent = $el.parent(),
        contentHeight = $("#main").outerHeight(),
        bottomSidebar = Hiof.Options.contentHeight - thisElementheight;

    //console.log("Height of #navbar: " + thisElementheight);
    //console.log("bottomSidebar  is:  " + bottomSidebar);
    if ($("#nav-page").length) {

        if ((Hiof.Options.windowWidth > Hiof.Options.navigationBreakpoint) && (Hiof.Options.distanceToTop > Hiof.Options.distanceToSidebarSticky)) {
            //console.log("The windowWidth is " + Hiof.Options.windowWidth + " bigger than navigationBreakpoint " + Hiof.Options.navigationBreakpoint);
            //console.log("The distanceToTop is " + Hiof.Options.distanceToTop + " and it is larger than distanceToSidebarSticky " + Hiof.Options.distanceToSidebarSticky);
            //console.log("The distanceToTop is " + Hiof.Options.distanceToTop + " is smaller than bottomSidebar " + bottomSidebar);
            $("#nav-page").addClass("sticky");
        } else {
            $("#nav-page").removeClass("sticky");
        }

    }
};

Hiof.ToggleUserNavigation = function() {
    $("#nav-internal").toggleClass("show");
};
Hiof.ToggleInternalNavigation = function() {
    $(".nav-page").toggleClass("show");
};


Hiof.ToggleMobileNavigation = function() {

    // Check if the buttons exsist
    if ($('#nav-mobile-internal').length) {

    } else {
        // Variables

        var button = '<a aria-hidden="true" class="navigation-mobile" href="#"></a>',
            svgNavSite = Hiof.getSvgIcon("nav-site"),
            svgNavUser = Hiof.getSvgIcon("user"),
            svgPageNav = Hiof.getSvgIcon("nav-page"),
            buttonNavSite = $(button).append("Meny").attr('id', 'nav-mobile-site').addClass('mobile-pages').append(svgNavSite),
            buttonNavUser = $(button).append("").attr('id', 'nav-mobile-user').addClass('mobile-user').append(svgNavUser),
            buttonNavPage = $(button).append("Gå til").attr('id', 'nav-mobile-internal').addClass('mobile-internal').append(svgPageNav);


        $("#header").append(buttonNavSite);
        $("#header").append(buttonNavUser);

        if ($('#nav-page').length) {
            $("#header").append(buttonNavPage);

            //console.log(Hiof.Options.windowWidth);

        }

    }

    // Attach click events to generated navigation
    $(function() {
        $(".navigation-mobile").on('click touchstart', function(e) {
            e.preventDefault();
            if ($(this).is("#nav-mobile-site")) {
                //console.log("#nav-mobile-site clicked");
                toggleLeftNavigation();
            } else if ($(this).is("#nav-mobile-user")) {
                //console.log("#nav-mobile-user clicked");
                Hiof.ToggleUserNavigation();
            } else if ($(this).is("#nav-mobile-internal")) {
                //console.log("#nav-mobile-internal clicked");
                Hiof.ToggleInternalNavigation();
            } else {
                return;
            }

        });
        $("#body").on('click touchstart', '#mobile-overlay', function(e) {
            e.preventDefault();
            //console.log("Overlay clicked...");
            $('#body').toggleClass('push-right');
            $('#mobile-overlay').remove();
        });
    });

};
