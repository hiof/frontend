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
            lang = Hiof.languageCheck();

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


        // Create a button
        var button = document.createElement('a');

        // Append standard attributes
        $(button).addClass('navigation-mobile').attr('aria-hidden', 'true').attr('href', '#');

        
        // Setup the different buttons
        var buttonNavSite = $(button).clone().text(navButtonTextMobileSite).attr('id', 'nav-mobile-site').addClass('mobile-pages'),
            buttonNavUser = $(button).clone().text(navButtonTextMobileUser).attr('id', 'nav-mobile-user').addClass('mobile-user'),
            buttonNavPage = $(button).clone().text(navButtonTextInternal).attr('id', 'nav-mobile-internal').addClass('mobile-internal');

        //$(buttonNavSite);
        //$(buttonNavUser);
        //$(buttonNavPage);


        if(!$("html.lt-ie10").length){
          var svgNavSite = Hiof.getSvgIcon("nav-site"),
              svgNavUser = Hiof.getSvgIcon("user"),
              svgPageNav = Hiof.getSvgIcon("nav-page");
            
          $(buttonNavSite).append(svgNavSite);
          $(buttonNavUser).append(svgNavUser);
          $(buttonNavPage).append(svgPageNav);
        }


        // Append the buttons to the DOM
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
                $.scrollTo($("#content"), 500, {
                    axis: 'y',
                    offset: {
                        top: -80
                    }
                });
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
   
    el.toggleClass("open");
    el.siblings(".dropdown-menu").slideToggle();
};

// Functionality to add a down-arrow to the vertical navigation
Hiof.Navigation.AddDropdownIconToVerticalNavigation = function(el){
    $(".dropdown-menu").siblings("a").each(function(){
        $(this).toggleClass("icon-down");
    });
};

// Functionality to manipulate markup for the left-navigation on small screens
Hiof.Navigation.ManipulateMarkupForVerticalNavigation = function(el) {
    if (Hiof.Options.windowWidth < 770) {

        var subNav = $(".dropdown-menu .dropdown-menu", el);
  
        if ($("li[data-temp]", el).length){

            //console.log("Generated content exsist");
        }else{
            //console.log("Generated content does not exsist");
            $(subNav).each(function(){
                var subNavSiblingAnchor = $(this).prev(),
                    subNavSiblingAnchorHref = $(subNavSiblingAnchor).attr("href"),
                    subNavSiblingAnchorText = $(subNavSiblingAnchor).text(),
                    newSubNavEl = '<li data-temp="true"><a href="' + subNavSiblingAnchorHref + '">' + subNavSiblingAnchorText + '</a></li>';
                    $(this).prepend(newSubNavEl);
            });
        }
        
    } else {
        if ($("li[data-temp]", el).length){
            //console.log("Removing all elements with data-temp");
            $("li[data-temp]", el).remove();
        }else{

        }
    }
};


Hiof.Navigation.AddInternalLinksToPageNav = function(){
    var list = document.createElement("ul"),
        listItem = "";
    $(list).addClass("nav nav-pills nav-stacked");

    $("#content h3").each(function() {
        listItem = listItem + '<li><a href="#' + $(this).attr("id") + '" title="Internlink til: ' + $(this).text() + '">' + $(this).text() + '</a></li>';
        return listItem;
    });

    $("#nav-page > ul").append(listItem);
};
Hiof.Navigation.ToggleInternalNavigationIndexDisplay = function(){
  $("#index-internal").toggleClass("visuallyhidden");
};