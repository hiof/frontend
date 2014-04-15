// Defualt namespace
var Hiof = Hiof || {};




$(function() {


    // ----------------------------------------------------------------------------------------------------
    // Fire code


      // Append toolbar
      Hiof.Toolbar();
      Hiof.Toolbar.SocialShare();
      Hiof.Toolbar.Print();

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
            }
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

