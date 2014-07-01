var Hiof = Hiof || {};





$(document).on('change', 'input[type="checkbox"]', function(e) {
  var thisElement = $(this),
      thisElementName = thisElement.attr("name");

  console.log("Someting changed -> " + thisElementName);

  //$("table.demo tbody tr:not(.footable-filtered) input[type=checkbox]").prop('checked', this.checked);
  //$('#main table').trigger('footable_filter', {filter: thisElementName});

  //alert($("input:checkbox:checked").length);
  //var searchTerm = Hiof.SetupStudyFilter();
  //console.log(searchTerm);
  $('#main table').trigger('footable_filter', {filter: thisElementName});
});

    //var fancyFilter = $("input[type=checkbox]").attr("name");
    //console.log(fancyFilter);



Hiof.SetupStudyFilter = function(e){
  var thisFormValues = $("#studie").serializeArray(),
  searchTerm = "";

  //console.log(searchTerm);
    jQuery.each( thisFormValues, function( i, field ) {
      console.log("singe search term: " + field.name);
      searchTerm += "," + field.name;
      //$( "#results" ).append( field.value + " " );

    });
  console.log("Full search term: " + searchTerm);
  //console.log(thisForm);
  return searchTerm;
};

Hiof.ExecuteFilterFromUrl = function(e){
  e.preventDefault();
};