// Defualt namespace
var Hiof = Hiof || {};




$(function() {
    // ----------------------------------------------------------------------------------------------------
    // Variables
    var distanceToTop = $(window).scrollTop(),
        distanceToTopBreakPoint,
        viewportWidth = $(window).width();



    // ----------------------------------------------------------------------------------------------------
    // Fire code
      // Layout helper
      Hiof.LayoutHelper();


      // Append toolbar
      Hiof.Toolbar();
      Hiof.Toolbar.SocialShare();
      Hiof.Toolbar.Print();



      // Check if the page should use quotes
      if($('.cover.page.quote').length){
        // Add Quotes
        Hiof.Quotes();
        // Refresh Quotes
        window.setInterval(function(){
          $(".cover-quote").fadeOut(500, function() { 
            var quoteId = $(this).data("id");
            //console.log(quoteId);
            $(this).remove();
            Hiof.Quotes(quoteId);
          });
        }, 10000);
      }

      // Equal height of articles
      Hiof.EqualHeight($(".article"));
      Hiof.EqualHeightContentAndSidebar();
      // Fade in all visible content
      Hiof.FadeInContent(0);

      // Toggle #Header if the page is scrolled to a sertain point
      if ($("#index").length) {
          distanceToTopBreakPoint = 30;
      } else {
          distanceToTopBreakPoint = 410;
      }

      if (distanceToTop > 0) {
          Hiof.HeaderToggle(distanceToTop, distanceToTopBreakPoint, viewportWidth);
      } else {
          //$("#header").addClass("light");
      }



    // ----------------------------------------------------------------------------------------------------
    // Events


    // Keyboard Shortcuts
    $(document).on('keydown', function(e){
      //console.log(e.keyCode);
      if(e.altKey){
        Hiof.KeyboardShortcuts(e);
      }
    });

    $(document).on("click touchstart", ".mobile-pages", function(e) {
        e.preventDefault();
        toggleLeftNavigation();
    });    
    $(document).on("click touchstart", ".mobile-user", function(e) {
        e.preventDefault();
        Hiof.ToggleUserNavigation();
    });

    // Redirect the user to the brand site when they right-clicl on the logo
    $("#logo-hiof").on("contextmenu", function(e) {
      e.preventDefault();
      if (e.which === 3) {
        window.location.href = "http://hiof.no/designmal";
      }
    });


    // Page navigation
    $(".nav-page a").on("click", function(e) {
        var url = $(this).attr("href");
        // If the link is internal, prevent default behaviour 
        if (url.indexOf("#") != -1) {
            //console.log("Url has a Hash");
            e.preventDefault();
            $(".nav-page .active").removeClass("active");
            $(this).parent().addClass("active");
            $.scrollTo($(url), 500, {
                axis: 'y',
                offset: {
                    top: -62
                }
            });
        } else {
            //console.log("URL does not contain a hash");
        }
    });


    // When window resize, fire the following code
     $(window).resize(function() {
        viewportWidth = $(window).width();
        if(viewportWidth < 770){
          Hiof.HeaderToggle(distanceToTop, distanceToTopBreakPoint, viewportWidth);
        }
     });




    $(window).scroll(function() {
        var distanceToTop = $(window).scrollTop();
            //windowWidth = $(window).width();

        Hiof.HeaderToggle(distanceToTop, distanceToTopBreakPoint, viewportWidth);

        Hiof.NavigationPageSection(distanceToTop);
        Hiof.FadeInContent(distanceToTop);
    });






      // Start the responsive table plugin
      //Hiof.ResponsiveTables();

    // ----------------------------------------------------------------------------------------------------
    // Responsive Tables

      // If there is a table on the page, activate the footable() plugin
      if($('#main table').length){
        $("#main table:not(.not-responsive)").footable({
            breakpoints: {
              phone: 640,
              tablet: 899,
              desktop: 900
            }, 
            limitNavigation: 5
          }).bind({
            'footable_paging' : function(e) {
              showPreAndNextPages(e);
            }
        });
      }

      // Check if the page has a filter element for the table
      if($('.filter').length){
        $('.filter').change(function (e) {
          e.preventDefault();
          $('#main table').trigger('footable_filter', {filter: $('.filter').val()});
        });
        $('#search').click(function (e) {
          e.preventDefault();
          $('#main table').trigger('footable_filter', {filter: $('#person-filter').val()});
        });

        $('#search-advanced-activate').click(function (e) {
          $("#search-advanced").toggle();
        });       
      }







});

// Verktøy

Hiof.TrekkVinner = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};