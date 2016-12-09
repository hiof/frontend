class Navigation {
  constructor() {
    this.view = new View();
    this.navPages = $('#nav-pages').detach();
    this.brand = $('#logo-wrapper').detach();
    this.navInternal = $('#nav-internal').detach();
    this.svgNavSite = this.view.getSvgIcon("nav-site"),
    this.svgNavUser = this.view.getSvgIcon("user"),
    this.svgPageNav = this.view.getSvgIcon("nav-page"),
    this.svgArrow = this.view.getSvgIcon("arrow-right");
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
      if (this.view.options.windowWidth > 955) {
        //let gSearch = $('#global-search').parent().detach();
        //$('#nav-internal').append(gSearch);
        //$('#search').addClass('btn-link');
        //$('#search').removeClass('btn').removeClass('btn-primary');
      }else{
        $('#nav').addClass('small-screen');
        $('#header-navigation-left').removeClass('collapse navbar-collapse').addClass('navbar-nav-wrapper');
        $('#header-navigation-right').removeClass('collapse navbar-collapse').addClass('navbar-nav-wrapper');
        $('#header-navigation-left a').removeClass('btn').removeClass('btn-primary');
        $('#header-navigation-right a').removeClass('btn').removeClass('btn-primary').removeClass('btn-line');
      }

      this.addDropdowns();

    }
    addDropdowns(){
      $('#nav ul li:has(ul)').addClass('dropdown-menu-item');
      let svgArrow = $(this.svgArrow).prop('outerHTML');
      $('.dropdown-menu-item>a').append(svgArrow);
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



      $("#header").on( "click", "#nav.small-screen .nav > li a", function(e) {
        if ($(this).siblings('.dropdown-menu').length) {
          e.preventDefault();
          $(this).parent().addClass('dropdown-menu-item-open');
          $(this).siblings().slideToggle();
        }
      });





      window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        nav.fixHeaderNavigationClasses();
        //alert(screen.orientation);
      }, false);

    });

  })(window.Hiof = window.Hiof || {});
