class Navigation {
  constructor() {
    this.view = new View();
    this.navPages = $('#nav-pages').detach();
    this.brand = $('#logo-wrapper').detach();
    this.navInternal = $('#nav-internal').detach();
    this.svgNavSite = this.view.getSvgIcon("nav-site"),
    this.svgNavUser = this.view.getSvgIcon("user"),
    this.svgPageNav = this.view.getSvgIcon("nav-page");
  }
  fixHeaderNavigationClasses(){
    let svgNavSite = $(this.svgNavSite).prop('outerHTML');
    let svgNavUser = $(this.svgNavUser).prop('outerHTML');


    $('#nav').removeClass('lo-full').addClass('navbar navbar-default navbar-fixed-top').html(`
      <div class="container-fluid">
      <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-target="#header-navigation-left" aria-expanded="false">
      <div class="nav-icon">
      <span class="nav-icon-line"></span>
      <span class="nav-icon-line"></span>
      </div>
      <span class="helper-text">Meny</span>
      </button>
      <a class="navbar-brand" id="logo-hiof" href="/"></a>
      <button type="button" class="navbar-toggle collapsed float-right" data-target="#header-navigation-right" aria-expanded="false">
      `+svgNavUser+`<span class="sr-only">Interne lenker</span>
      </button>
      </div>
      <div class="collapse navbar-collapse" id="header-navigation-left"></div>
      <div class="collapse navbar-collapse" id="header-navigation-right"></div>
      </div>`);





      let fixedNavPages = $(this.navPages).removeClass('navigation').removeClass('float-left').addClass('nav navbar-nav');
      let fixedNavInternal = $(this.navInternal).removeClass('float-right').addClass('nav navbar-nav navbar-right');
      let fixedBrand = $(this.brand).find('svg');
      $('#header-navigation-left').append(fixedNavPages);
      $('#nav .navbar-brand').append(fixedBrand);
      $('#header-navigation-right').append(fixedNavInternal);


      // Move search to the right side on horizontal nav...
      if (Hiof.Options.windowWidth > 955) {
        let gSearch = $('#global-search').parent().detach();
        $('#nav-internal').append(gSearch);
        $('#search').addClass('btn-line');
      }else{
        $('#nav').addClass('small-screen');
        $('#header-navigation-left').removeClass('collapse navbar-collapse').addClass('navbar-nav-wrapper');
        $('#header-navigation-right').removeClass('collapse navbar-collapse').addClass('navbar-nav-wrapper');
      }

      $('#header-navigation-left a').removeClass('btn').removeClass('btn-primary');
      $('#header-navigation-right a').removeClass('btn').removeClass('btn-primary').removeClass('btn-line');
    }
  }

  (function(Hiof, undefined) {


    $(function() {
      let nav = new Navigation();

      nav.fixHeaderNavigationClasses();


      // Toggle between the two types of navigation
      $("#header").on( "click", "#nav.small-screen button", function(e) {
        let btn = $(this);
        //$(this).toggleClass('active');
        let target = $(this).data('target');
        //console.log(target);
        if($(target).hasClass('open')){
          $(target).removeClass('open');
          $(btn).removeClass('active');
        }else{
          $('.navbar-nav-wrapper').removeClass('open');
          $(target).addClass('open');
          $(btn).addClass('active');
        }
        //$('.navbar-nav-wrapper').not(this).collapse('hide');
      });



      $("#header").on( "click", "#nav.small-screen .nav > li> a", function(e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
      });





      window.addEventListener("orientationchange", function() {
      	// Announce the new orientation number
        nav.fixHeaderNavigationClasses();
      	//alert(screen.orientation);
      }, false);

    });

  })(window.Hiof = window.Hiof || {});

  //(function(Hiof, undefined) {
  //
  //
  //  //var Hiof = Hiof || {};
  //
  //  Hiof.Navigation = {};
  //
  //
  //  // This page use slideout-navigation functions from
  //  // the slideout vendor plugin (defined in bower.json)
  //
  //
  //
  //  headerToggle = function() {
  //    //console.log("viewportWidth is:" + viewportWidth);
  //    //console.log("Option.viewportWidth is:" + Hiof.Options.viewportWidth);
  //
  //    if ($("html.cover").length) {
  //      if (Hiof.Options.windowWidth < Hiof.Options.navigationBreakpoint) {
  //        //console.log("mobile navigation is activated");
  //        $("#header").removeClass("light");
  //      } else {
  //        if (Hiof.Options.distanceToTop > Hiof.Options.distanceToTopBreakPoint) {
  //          $("#header").removeClass("light");
  //        } else {
  //          $("#header").addClass("light");
  //        }
  //      }
  //    }
  //
  //
  //  };
  //  Hiof.NavigationPageSection = function() {
  //
  //    // TODO: add check for #footer position
  //    var $el = $("#nav-page"),
  //    thisElementheight = $el.outerHeight(),
  //    $parent = $el.parent(),
  //    contentHeight = $("#main").outerHeight(),
  //    bottomSidebar = Hiof.Options.contentHeight - thisElementheight;
  //
  //    //console.log("Height of #navbar: " + thisElementheight);
  //    //console.log("bottomSidebar  is:  " + bottomSidebar);
  //    //if ($("#nav-page").length) {
  //    //    if ((Hiof.Options.windowWidth > Hiof.Options.navigationBreakpoint) && (Hiof.Options.distanceToTop > Hiof.Options.distanceToSidebarSticky)) {
  //    //        //console.log("The windowWidth is " + Hiof.Options.windowWidth + " bigger than navigationBreakpoint " + Hiof.Options.navigationBreakpoint);
  //    //        //console.log("The distanceToTop is " + Hiof.Options.distanceToTop + " and it is larger than distanceToSidebarSticky " + Hiof.Options.distanceToSidebarSticky);
  //    //        //console.log("The distanceToTop is " + Hiof.Options.distanceToTop + " is smaller than bottomSidebar " + bottomSidebar);
  //    //        $("#nav-page").addClass("sticky");
  //    //    } else {
  //    //        $("#nav-page").removeClass("sticky");
  //    //    }
  //    //}
  //  };
  //
  //  Hiof.ToggleUserNavigation = function() {
  //    $("#nav-internal").toggleClass("show");
  //  };
  //  toggleInternalNavigation = function() {
  //    $(".nav-page").toggleClass("show");
  //  };
  //
  //
  //  toggleMobileNavigation = function() {
  //    //var view = new View();
  //    // Check if the buttons exsist
  //    if ($('#nav-mobile-internal').length) {
  //      // If it exsist, return the function without doing anything else.
  //      return;
  //    }
  //
  //    // Variables
  //
  //    var navButtonTextMobileSite,
  //    navButtonTextMobileUser,
  //    navButtonTextInternal,
  //    lang = Hiof.view.ln;
  //
  //    //console.log(lang);
  //
  //    if (lang === "eng") {
  //      //console.log("English site");
  //      navButtonTextMobileSite = "Menu";
  //      navButtonTextMobileUser = "";
  //      navButtonTextInternal = "Go to";
  //    } else {
  //      //console.log("Snakker du norsk?");
  //      navButtonTextMobileSite = "Meny";
  //      navButtonTextMobileUser = "";
  //      navButtonTextInternal = "Gå til";
  //    }
  //
  //
  //    // Create a button
  //    var button = document.createElement('a');
  //
  //    // Append standard attributes
  //    $(button).addClass('navigation-mobile').attr('aria-hidden', 'true').attr('href', '#');
  //
  //
  //    // Setup the different buttons
  //    var buttonNavSite = $(button).clone().text(navButtonTextMobileSite).attr('id', 'nav-mobile-site').addClass('mobile-pages'),
  //    buttonNavUser = $(button).clone().text(navButtonTextMobileUser).attr('id', 'nav-mobile-user').addClass('mobile-user'),
  //    buttonNavPage = $(button).clone().text(navButtonTextInternal).attr('id', 'nav-mobile-internal').addClass('mobile-internal');
  //
  //    //$(buttonNavSite);
  //    //$(buttonNavUser);
  //    //$(buttonNavPage);
  //
  //
  //    if (!$("html.lt-ie10").length) {
  //      var svgNavSite = Hiof.view.getSvgIcon("nav-site"),
  //      svgNavUser = Hiof.view.getSvgIcon("user"),
  //      svgPageNav = Hiof.view.getSvgIcon("nav-page");
  //
  //      $(buttonNavSite).append(svgNavSite);
  //      $(buttonNavUser).append(svgNavUser);
  //      $(buttonNavPage).append(svgPageNav);
  //    }
  //
  //
  //    // Append the buttons to the DOM
  //    $("#header").append(buttonNavSite);
  //    $("#header").append(buttonNavUser);
  //    if ($('#nav-page').length) {
  //      $("#header").append(buttonNavPage);
  //    }
  //
  //
  //  };
  //
  //  // Functionality to toggle sub-navs
  //  toggleSubNavigations = function(el) {
  //
  //    el.toggleClass("open");
  //    el.siblings(".dropdown-menu").slideToggle();
  //  };
  //
  //  // Functionality to add a down-arrow to the vertical navigation
  //  addDropdownIconToVerticalNavigation = function(direction) {
  //
  //
  //
  //
  //    $(".dropdown-menu").siblings("a").each(function() {
  //      if (direction === "down") {
  //        $(this).toggleClass("icon-down");
  //      } else {
  //        $(this).toggleClass("icon-right");
  //      }
  //    });
  //  };
  //
  //  // Functionality to manipulate markup for the left-navigation on small screens
  //  manipulateMarkupForVerticalNavigation = function(el) {
  //    if (Hiof.Options.windowWidth < 770) {
  //
  //      var subNav = $(".dropdown-menu .dropdown-menu", el);
  //
  //      if ($("li[data-temp]", el).length) {
  //
  //        //console.log("Generated content exsist");
  //      } else {
  //        //console.log("Generated content does not exsist");
  //        $(subNav).each(function() {
  //          var subNavSiblingAnchor = $(this).prev(),
  //          subNavSiblingAnchorHref = $(subNavSiblingAnchor).attr("href"),
  //          subNavSiblingAnchorText = $(subNavSiblingAnchor).text(),
  //          newSubNavEl = '<li data-temp="true"><a href="' + subNavSiblingAnchorHref + '">' + subNavSiblingAnchorText + '</a></li>';
  //          $(this).prepend(newSubNavEl);
  //        });
  //      }
  //
  //      $('#nav-pages').css('height', Hiof.options.windowHeight + 'px');
  //
  //    } else {
  //      if ($("li[data-temp]", el).length) {
  //        //console.log("Removing all elements with data-temp");
  //        $("li[data-temp]", el).remove();
  //      } else {
  //
  //      }
  //    }
  //
  //
  //
  //
  //  };
  //
  //
  //  // Functionality to manipulate markup on the Study page on small screens.
  //  manipulateMarkupForStudyPageOnMobile = function() {
  //    // TODO: Create this icons
  //    //var iconPlus = Hiof.getSvgIcon("plus"),
  //    //    iconMinus = Hiof.getSvgIcon("minus");
  //    //$(iconPlus).addClass("hidden");
  //    //$(iconMinus).addClass("hidden");
  //    if ($('#studie').length) {
  //      if (Hiof.Options.windowWidth > 770) {
  //        $('.toggle-filter').remove();
  //        //$('#study-filter').removeAttr('data-moved-in-dom');
  //        $('#study-filter').detach().appendTo('#sidebar');
  //      } else {
  //        if (!$('.toggle-filter').length) {
  //          var filterToggle = document.createElement("a");
  //
  //          $(filterToggle).addClass('float-right toggle-filter mobile-filter').text("Filtrer").attr('href', '#');
  //          $('#header').append(filterToggle);
  //          //$('#study-filter').attr('data-moved-in-dom', 'true');
  //          $('#study-filter').detach().insertAfter('#content header');
  //          //$('#study-filter h3').each(function() {
  //          //  $(this).append('<a href="#" class="btn btn-primary toggle-filter-section">' + iconPlus +'</a>');
  //          //});
  //        }
  //
  //      }
  //    }
  //
  //  };
  //
  //  toggleFilterVisibility = function() {
  //    $('#study-filter').slideToggle();
  //    $.scrollTo($("#content"), 500, {
  //      axis: 'y',
  //      offset: {
  //        top: -80
  //      }
  //    });
  //  };
  //
  //  closeAllFilterDropdowns = function() {
  //    $('#study-filter h3').each(function() {
  //      $(this).next().slideUp();
  //    });
  //  };
  //
  //  openAllFilterDropdowns = function() {
  //    $('#study-filter h3').each(function() {
  //      $(this).next().slideDown();
  //    });
  //  };
  //
  //  Hiof.Navigation.AddInternalLinksToPageNav = function() {
  //    var list = document.createElement("ul"),
  //    listItem = "";
  //    $(list).addClass("nav nav-pills nav-stacked");
  //
  //    $("#content h3").each(function() {
  //      listItem = listItem + '<li><a href="#' + $(this).attr("id") + '" title="Internlink til: ' + $(this).text() + '">' + $(this).text() + '</a></li>';
  //      return listItem;
  //    });
  //
  //    $("#nav-page > ul").append(listItem);
  //  };
  //  Hiof.Navigation.ToggleInternalNavigationIndexDisplay = function() {
  //    $("#index-internal").toggleClass("visuallyhidden");
  //  };
  //
  //
  //
  //
  //
  //  // On document load
  //  $(function() {
  //    // Attach mobile nav icons
  //    toggleMobileNavigation();
  //
  //
  //
  //    if (Hiof.Options.windowWidth < 770) {
  //      manipulateMarkupForVerticalNavigation("#nav-pages");
  //
  //      manipulateMarkupForStudyPageOnMobile();
  //
  //      addDropdownIconToVerticalNavigation("down");
  //
  //    } else {
  //
  //      addDropdownIconToVerticalNavigation("right");
  //    }
  //
  //
  //    if (Hiof.Options.distanceToTop > 0) {
  //      headerToggle();
  //    } else {
  //      //$("#header").addClass("light");
  //    }
  //
  //    $(".toggle-filter").on('click', function(e) {
  //      toggleFilterVisibility();
  //    });
  //
  //    // Attach click events to generated navigation
  //
  //    $(".navigation-mobile").on('click touchstart', function(e) {
  //      e.preventDefault();
  //      if ($(this).is("#nav-mobile-site")) {
  //        //console.log("#nav-mobile-site clicked");
  //        toggleLeftNavigation();
  //      } else if ($(this).is("#nav-mobile-user")) {
  //        //console.log("#nav-mobile-user clicked");
  //        Hiof.ToggleUserNavigation();
  //      } else if ($(this).is("#nav-mobile-internal")) {
  //        //console.log("#nav-mobile-internal clicked");
  //        $.scrollTo($("#content"), 500, {
  //          axis: 'y',
  //          offset: {
  //            top: -80
  //          }
  //        });
  //        toggleInternalNavigation();
  //      } else {
  //        return;
  //      }
  //
  //    });
  //    $("#body").on('click touchstart', '#mobile-overlay', function(e) {
  //      e.preventDefault();
  //      //console.log("Overlay clicked...");
  //      $('#body').toggleClass('push-right');
  //      $('#mobile-overlay').remove();
  //    });
  //
  //
  //
  //
  //    $("#body").on('click touchstart', '#study-filter h3', function(e) {
  //      $(this).toggleClass('closed');
  //      $(this).next().slideToggle();
  //    });
  //
  //
  //    // Toggle the visibility of subnavigation on the external nav tree
  //
  //
  //    $("span.btn, a", "#nav-pages").on("click", function(e) {
  //      var thisElement = $(this);
  //      if (Hiof.Options.windowWidth < 770) {
  //        if (thisElement.siblings(".dropdown-menu").length) {
  //          e.preventDefault();
  //          toggleSubNavigations(thisElement);
  //        }
  //      }
  //
  //    });
  //
  //    $('#nav-pages a, #nav-internal a').focus(function(e){
  //      if (Hiof.Options.windowWidth > 770) {
  //        $(this).next().toggle();
  //      }
  //    });
  //
  //
  //
  //    // Page navigation
  //    $("#nav-page").on("click", "a", function(e) {
  //      var url = $(this).attr("href");
  //      //e.preventDefault();
  //      // If the link is internal, prevent default behaviour
  //      if (url.startsWith("#")) {
  //        //console.log("Url has a Hash");
  //        e.preventDefault();
  //        toggleInternalNavigation();
  //        $(".nav-page .active").removeClass("active");
  //        $(this).parent().addClass("active");
  //        $.scrollTo($(url), 500, {
  //          axis: 'y',
  //          offset: {
  //            top: -62
  //          }
  //        });
  //      } else {
  //        //console.log("URL does not contain a hash");
  //      }
  //    });
  //
  //
  //
  //    //      $('#nav-pages a, #nav-internal a').focus(function(e){
  //    //        //console.log('Focus on element');
  //    //        //$('#nav-pages .dropdown-menu, #nav-internal .dropdown-menu').hide();
  //    //        $(this).next().toggle();
  //    //      });
  //
  //
  //    // When window resize, fire the following code
  //    $(window).resize(function() {
  //      // Updated the settings for the viewport size when the website is reset.
  //      Hiof.Options.windowWidth = $(window).width();
  //      //viewportWidth = $(window).width();
  //
  //      manipulateMarkupForStudyPageOnMobile();
  //      if (Hiof.Options.windowWidth < 770) {
  //        headerToggle();
  //        manipulateMarkupForVerticalNavigation("#nav-pages");
  //        //Hiof.EqualHeightContentAndSidebar();
  //      } else {
  //        manipulateMarkupForVerticalNavigation("#nav-pages");
  //        //Hiof.EqualHeightContentAndSidebar();
  //        addDropdownIconToVerticalNavigation();
  //        manipulateMarkupForStudyPageOnMobile();
  //      }
  //    });
  //
  //
  //    // Update settings and execute functions when the user scroll
  //    $(window).scroll(function() {
  //
  //      Hiof.NavigationPageSection();
  //    });
  //
  //  });
  //
  //  // Expose functions to the window
  //  window.Hiof.HeaderToggle = headerToggle;
  //
  //})(window.Hiof = window.Hiof || {});
