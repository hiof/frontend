// Defualt namespace
var Hiof = Hiof || {};




$(function() {


    // Fire code
    Hiof.Toolbar();
    Hiof.Toolbar.SocialShare();
    Hiof.Toolbar.Print();


      // If there is a table on the page, activate the footable() plugin
      if($('#main table').length){
        $("#main table:not(.not-responsive)").footable().bind({
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

