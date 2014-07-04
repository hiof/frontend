var Hiof = Hiof || {};

Hiof.Navigation = {};


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
        // If it exsist, return the function without doing anything else.
        return;
    } 

        // Variables

        
        var navButtonTextMobileSite,
            navButtonTextMobileUser,
            navButtonTextInternal,
            lang = Hiof.Language.Check();

        //console.log(lang);

        if (lang === "eng"){
            //console.log("English site");
            navButtonTextMobileSite = "Menu";
            navButtonTextMobileUser = "";
            navButtonTextInternal = "Go to";
        }else{
            //console.log("Snakker du norsk?");
            navButtonTextMobileSite = "Meny";
            navButtonTextMobileUser = "";
            navButtonTextInternal = "Gå til";
        }

        var button = '<a aria-hidden="true" class="navigation-mobile" href="#"></a>',
            svgNavSite = Hiof.getSvgIcon("nav-site"),
            svgNavUser = Hiof.getSvgIcon("user"),
            svgPageNav = Hiof.getSvgIcon("nav-page"),
            buttonNavSite = $(button).append(navButtonTextMobileSite).attr('id', 'nav-mobile-site').addClass('mobile-pages').append(svgNavSite),
            buttonNavUser = $(button).append(navButtonTextMobileUser).attr('id', 'nav-mobile-user').addClass('mobile-user').append(svgNavUser),
            buttonNavPage = $(button).append(navButtonTextInternal).attr('id', 'nav-mobile-internal').addClass('mobile-internal').append(svgPageNav);


        $("#header").append(buttonNavSite);
        $("#header").append(buttonNavUser);

        if ($('#nav-page').length) {
            $("#header").append(buttonNavPage);
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

// Functionality to toggle sub-navs
Hiof.ToggleSubNavigations = function(el) {
    el.siblings(".dropdown-menu").slideToggle();
};


// Functionalyt to manipulate markup for the left-navigation on small screens
Hiof.Navigation.ManipulateMarkupForVerticalNavigation = function(el) {
    if (Hiof.Options.windowWidth < 770) {
        //console.log("Hello");
        var subNav = $(".dropdown-menu .dropdown-menu", el),
            subNavSiblingAnchor = subNav.siblings("a"),
            subNavSiblingAnchorHref = subNavSiblingAnchor.attr("href"),
            subNavSiblingAnchorText = subNavSiblingAnchor.text(),
            newSubNavEl = '<li data-temp="true"><a href="' + subNavSiblingAnchorHref + '">' + subNavSiblingAnchorText + '</a></li>';

        //console.log(newSubNavEl);
        //subNavSiblingAnchor.css("background", "pink");
        if ($("li[data-temp]", el).length){

            //console.log("Generated content exsist");
        }else{
            //console.log("Generated content does not exsist");
            subNav.prepend(newSubNavEl);
            // Highlight generated content for test purposes
            $("li[data-temp]", el).css("background", "pink");
        }
        
    } else {
        if ($("li[data-temp]", el).length){
            //console.log("Removing all elements with data-temp");
            $("li[data-temp]", el).remove();
        }else{

        }
    }
};
