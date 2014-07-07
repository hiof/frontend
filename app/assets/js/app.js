// Defualt namespace
var Hiof = Hiof || {};




Hiof.Options = {
  distanceToTop: $(window).scrollTop(),
  windowWidth: $(window).width(),
  distanceToTopBreakPoint: 0,
  distanceToSidebarSticky: 0,
  navigationBreakpoint: 770,
  contentHeight: $("#main").outerHeight()
};
//console.log(Hiof.Options.contentHeight);

$(function() {
    // ----------------------------------------------------------------------------------------------------
    // Variables / options




    // Updated #Header toggle option if the page is scrolled to a sertain point
    if ($("#index").length) {
        Hiof.Options.distanceToTopBreakPoint = 30;
    } else {
        Hiof.Options.distanceToTopBreakPoint = 410;
    }


    if ($("html.cover").length) {
        Hiof.Options.distanceToSidebarSticky = 575;
    } else {
        Hiof.Options.distanceToSidebarSticky = 20;
    }

 
    Hiof.Options.contentHeight = $("#main").outerHeight();

    //console.log(Hiof.Options.contentHeight);

    // ----------------------------------------------------------------------------------------------------
    // Fire code
      // Polyfill helper
      Hiof.Polyfill();

      // Layout helper
      Hiof.LayoutHelper();


      // Append toolbar
      Hiof.Toolbar();
      Hiof.Toolbar.SocialShare();
      Hiof.Toolbar.Print();

      // Attach mobile nav icons
      Hiof.ToggleMobileNavigation();

      // Check if the page should use quotes
      if($('html.quote').length){
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
        }, 100000);
      }



      window.setInterval(function(){
        Hiof.EqualHeightContentAndSidebar();
      }, 3000);

      
      // Fade in all visible content
      Hiof.FadeInContent(0);



      if (Hiof.Options.distanceToTop > 0) {
          Hiof.HeaderToggle();
      } else {
          //$("#header").addClass("light");
      }


      if(Hiof.Options.windowWidth < 770){
        Hiof.Navigation.ManipulateMarkupForVerticalNavigation("#nav-pages");
      }else{

      }

      // If the device does not have touch, fix z-index on embed
      //if($("html.no-touch").length){
      //   $('iframe[src^="//www.youtube.com/embed"').each(function(){
      //        var url = $(this).attr("src");
      //        var separator = (url.indexOf('?') > 0) ? '&' : '?';
      //        $(this).attr('src', url + separator + 'wmode=transparent');
      //    });
      //}
 

    // ----------------------------------------------------------------------------------------------------
    // Events


    // Keyboard Shortcuts
    $(document).on('keydown', function(e){
      //console.log(e.keyCode);
      if(e.altKey){
        Hiof.KeyboardShortcuts(e);
      }
    });

    //$(document).on("click touchstart", ".mobile-pages", function(e) {
    //    e.preventDefault();
    //    toggleLeftNavigation();
    //});    
    //$(document).on("click touchstart", ".mobile-user", function(e) {
    //    e.preventDefault();
    //    Hiof.ToggleUserNavigation();
    //});

    // Redirect the user to the brand site when they right-clicl on the logo
    $("#logo-hiof").on("contextmenu", function(e) {
      e.preventDefault();
      if (e.which === 3) {
        window.location.href = "http://hiof.no/designmal";
      }
    });

    // Toggle the visibility of subnavigation on the external nav tree


    $("span.btn, a", "#nav-pages").on("click", function(e){
      if(Hiof.Options.windowWidth < 770){

        var thisElement = $(this);
        if (thisElement.siblings(".dropdown-menu").length){
          console.log("element has a sibling with the dropdown-menu class");
          e.preventDefault();
          Hiof.ToggleSubNavigations(thisElement);
        }
      }
    });

    // Page navigation
    $(".nav-page a").on("click", function(e) {
        var url = $(this).attr("href");
        // If the link is internal, prevent default behaviour 
        if (url.indexOf("#") != -1) {
            //console.log("Url has a Hash");
            e.preventDefault();
            Hiof.ToggleInternalNavigation();
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
        // Updated the settings for the viewport size when the website is reset.
        Hiof.Options.windowWidth = $(window).width();
        //viewportWidth = $(window).width();
        if(Hiof.Options.windowWidth < 770){
          Hiof.HeaderToggle();
          Hiof.Navigation.ManipulateMarkupForVerticalNavigation("#nav-pages");
        }else{
          Hiof.Navigation.ManipulateMarkupForVerticalNavigation("#nav-pages");
        }


     });



    $(window).scroll(function() {
        // Updated the settings for the scroll position when the user scroll on the site
        Hiof.Options.distanceToTop = $(window).scrollTop();
        Hiof.Options.contentHeight = $("#main").outerHeight();
        //Fire functions
        Hiof.HeaderToggle();

        Hiof.NavigationPageSection();
        Hiof.FadeInContent();


    });







      // Start the responsive table plugin
      //Hiof.ResponsiveTables();

    // ----------------------------------------------------------------------------------------------------
    // Responsive Tables









      //window.footable.options.filter.filterFunction = function(index) {
      //  var $t = $(this),
      //    $table = $t.parents('table:first'),
      //    filter = $table.data('current-filter').toUpperCase(),
      //    columns = $t.find('td'),
      //    row = $t.find('tr');
      //  var regEx = new RegExp("\\b" + filter + "\\b");
      //  var result = false;
      //  for (i = 0; i < columns.length; i++) {
      //    var text = $(columns[i]).text();
      //    result = regEx.test(text.toUpperCase());
      //    if (result === true)
      //      break;
      //    if (!$table.data('filter-text-only')) {
      //      text = $(columns[i]).data("value");
      //      if (text)
      //        result = regEx.test(text.toString().toUpperCase());
      //    }
      //    if (result === true)
      //      break;
      //  }
      //  return result;
      //};













      // If there is a table on the page, activate the footable() plugin
      if($('#main table').length){
        $("#main table:not(.not-responsive)").footable({
            breakpoints: {
              phone: 640,
              tablet: 899,
              desktop: 900
            }, 
            limitNavigation: 5,
            //debug: true,
            //filter: {
            //  filterFunction: function(index) {
            //    var $t = $(this),
            //        $table = $t.parents('table:first'),
            //        filter = $table.data('current-filter').toUpperCase(),
            //        text = $t.find('td').text();
            //    if (!$table.data('filter-text-only')) {
            //        $t.find('tr[data-value]').each(function () {
            //            //console.log($this);
            //            text += $(this).data('value');
            //        });
            //    }
            //    return text.toUpperCase().indexOf(filter) >= 0;
            //  }
            //}

            //log: function(message, type) {
            //    counter++;
            //    var console = $("#console");
            //    if (counter > 1) console.append('\n');
            //    console.append(counter + ': ' + message);
            //    console[0].scrollTop = console[0].scrollHeight;
            //}
          }).bind({
            'footable_breakpoint' : function(e) {
                //console.log("footable_breakpoint initiated");
                
            },
            'footable_paging' : function(e) {
              //showPreAndNextPages(e);
            },
            'footable_filtering': function(e){
              //console.log("Filter fired");
            },
            'footable_filtered': function(e){
              //console.log("Filter finished");
              //console.log("Number of visible rows" + numOfVisibleRows);
              
              if($('#main table caption span').length){
                var numOfVisibleRows = $('#main table tbody tr:visible').length;
                $('#main table caption .label').removeClass('label-info').addClass('label-warning');
                $('#main table caption span').html(numOfVisibleRows);
                setInterval(function(){
                  if($('#main table caption .label-warning').length){
                    $('#main table caption .label').removeClass('label-warning').addClass('label-info');
                  }                  
                },2000);
                //console.log("Counter exsist");
              }
            }


        });
      }
      $('.footable-loaded').trigger('footable_expand_first_row');


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
$( window ).load(function() {
    // Equal height of articles
    Hiof.EqualHeight($(".article"));
});



// Verktøy

Hiof.TrekkVinner = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};