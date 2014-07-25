

var Hiof = Hiof || {};

Hiof.Study = {};


$(document).on('change', '#studie input', function(e) {
  var thisElement = $(this),
      thisElementName = thisElement.attr("name");

  console.log("Someting changed -> " + thisElementName);

  //$("table.demo tbody tr:not(.footable-filtered) input[type=checkbox]").prop('checked', this.checked);
  //$('#main table').trigger('footable_filter', {filter: thisElementName});

  //alert($("input:checkbox:checked").length);
  var searchTerm = Hiof.SetupStudyFilter();
  var something = "<pre><code>" + searchTerm +  "</code></pre>";
  $("#content").append(something);

  //console.log(myArray);
  $('#main table').trigger('footable_filter', {filter: searchTerm});
});

    //var fancyFilter = $("input[type=checkbox]").attr("name");
    //console.log(fancyFilter);



Hiof.SetupStudyFilter = function(e){
  var thisFormValues = $("#studie").serializeArray(),
      searchTerm = [];
      //searchTerm = "";

  //console.log(thisFormValues);
  jQuery.each( thisFormValues, function( i, field ) {
    //console.log("singe search term: " + field.name);
    //searchTerm += field.name + " ";

    searchTerm.push(field.name);

    //$( "#results" ).append( field.value + " " );

  });
  //console.log("Full search term: " + searchTerm);
  //console.log(thisForm);
  return searchTerm;
  //return thisFormValues;
};

//Hiof.ExecuteFilterFromUrl = function(e){
//  e.preventDefault();
//};



Hiof.Study.DuplicateStudyCourseFacts = function(){

    var studyCourseFacts = $("#program-KS601").parent().clone();


    $(studyCourseFacts).addClass("study-course-facts");
    

    $(studyCourseFacts).insertAfter("#program-KS019");
    $(".study-course-facts h3").remove();
    $(".study-course-facts #knapp1").remove();
    $(".study-course-facts #toggleme").remove();

    //console.log(studyCourseFacts);
  

};

Hiof.Study.ExecuteFilterFromUrl = function(){
  var searchTerm = Hiof.Helper.getUrlParameterByName("filterDepartment").toString();


  if (searchTerm.match("^ovrig")) {
     var newSearchTerm = searchTerm.split('_');
     newSearchTerm = newSearchTerm[1];
     searchTerm = "kat_" + newSearchTerm;
  }

  //console.log("Søker etter " + searchTerm);
  if(typeof searchTerm != 'undefined'){
    //console.log("gogo filter");
    $('#main table').trigger('footable_filter', {filter: searchTerm});
  }

};