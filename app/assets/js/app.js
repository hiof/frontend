

$(function() {
    // ----------------------------------------------------------------------------------------------------
    // Variables / options




    // Updated #Header toggle option if the page is scrolled to a sertain point
    if ($("#index").length) {
        Hiof.Options.distanceToTopBreakPoint = 30;
    } else {
        Hiof.Options.distanceToTopBreakPoint = 365;
    }


    if ($("html.cover").length) {
        Hiof.Options.distanceToSidebarSticky = 365;
    } else {
        Hiof.Options.distanceToSidebarSticky = 20;
    }


    Hiof.Options.contentHeight = $("#main").outerHeight();
    Hiof.syncMetaInformation();
    //console.log(Hiof.Options.contentHeight);

    // ----------------------------------------------------------------------------------------------------
    // Fire code
      // Polyfill helper
      Hiof.Polyfill();

      // Layout helper
      Hiof.LayoutHelper();

      Hiof.LayoutHelper("#research");
      Hiof.LayoutHelper("#news");

      // Append toolbar
      //Hiof.Toolbar();
      //Hiof.Toolbar.SocialShare();
      //Hiof.Toolbar.Print();






      //Hiof.EqualHeightContentAndSidebar();
      //Hiof.EqualHeight($('#content, #news, #sidebar'));

      //window.setInterval(function(){
      //  Hiof.EqualHeightContentAndSidebar();
      //}, 3000);


      // Fade in all visible content
      Hiof.FadeInContent(0);



      // Search

      //$('#global-search-input').addClass('initial');


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
      }else if(e.keyCode == 27){

        if($('#global-search-input').is(':focus')){
          //console.log("Input has focus when esc key is clicked");
          Hiof.Search.Toggle();

        }else{
          //console.log("Esc key pressed");
        }
        //e.k
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
        window.location.href = "http://design.hiof.no";
      }
    });





    // Reset filter
    //$('#study-search-reset').on("click", function(e){
    //  e.preventDefault();
    //  $('#searchcontent').val('');
    //  $('table').data('footable-filter').clearFilter();
    //});






    // Update settings and execute functions when the user scroll
    $(window).scroll(function() {



        // Updated the settings for the scroll position when the user scroll on the site
        Hiof.Options.distanceToTop = $(window).scrollTop();
        Hiof.Options.contentHeight = $("#main").outerHeight();



        //var oVal = Hiof.Options.distanceToTop / 240;

        $(".cover-photo-blur").css("opacity", (Hiof.Options.distanceToTop / 240));


        //console.log(Hiof.Options.distanceToTop);


        //Fire functions
        //Hiof.HeaderToggle();

        //Hiof.FadeInContent();


    });



    // Toogle the global search field and submit the search
    $('#search').on('click', function(e){
      if($('#global-search').hasClass('initial')){
        e.preventDefault();
        Hiof.Search.Toggle();
        $('#global-search-input').focus();
      }else{
        $('#global-search').submit();
      }
    });

    //$('#search').focus(function(e){
    //  if($('#global-search').hasClass('initial')){
    //    e.preventDefault();
    //    Hiof.Search.Toggle();
    //    $('#global-search-input').focus();
    //  }
    //});


    $('#search-close').on('click', function(e){
      e.preventDefault();
      Hiof.Search.Toggle();
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
      if($('#main table').length && $('#KS016').length === 0 && $('#hiofboard').length === 0) {
        $("#main table:not(.not-responsive)").footable({
            breakpoints: {
              phone: 640,
              tablet: 899,
              desktop: 900
            },
            limitNavigation: 5,
            pageSize: 50,
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
              Hiof.scrollToElement('#content');
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
