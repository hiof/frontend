var Hiof = Hiof || {};

Hiof.Study = {};

//Hiof.Study.FilterResults = function(e){
//
//  //.dropdown-menu
//};



Hiof.Study.DuplicateStudyCourseFacts = function() {

  var studyCourseFacts = $("#program-KS601").parent().clone(),
    btnApply = $("#program-KS602").next().find("a").clone();

  $(studyCourseFacts).addClass("study-course-facts");


  $(studyCourseFacts).insertAfter("#program-KS019");
  $(".study-course-facts h3").remove();
  $(".study-course-facts #knapp1").remove();
  $(".study-course-facts #toggleme").remove();

  $(".study-course-facts").append(btnApply);

  //console.log(studyCourseFacts);


};

Hiof.Study.ExecuteFilterFromUrl = function() {
  var searchTerm = Hiof.Helper.getUrlParameterByName("filterDepartment").toString();


  if (searchTerm.match("^ovrig")) {
    var newSearchTerm = searchTerm.split('_');
    newSearchTerm = newSearchTerm[1];
    searchTerm = "kat_" + newSearchTerm;
  }

  //console.log("Søker etter " + searchTerm);
  if (typeof searchTerm != 'undefined') {
    //console.log("gogo filter");
    $('#main table').trigger('footable_filter', {
      filter: searchTerm
    });
  }

};

(function() {
  $(function() {



    if ($("#KS033").length > 0) {
      var showDetailsUrl = $("#content a").first().attr('href');
      if (showDetailsUrl.toLowerCase().indexOf("studieplaner") >= 0) {
        var showDetails = $("#content a").first(),
          newShowDetails = $(showDetails).clone().addClass("btn btn-primary").text("Vis studie-/fagplan med emnebeskrivelse");
        $(showDetails).remove();
        $("#content h2").first().remove();
        $("#content h2").first().after(newShowDetails);
        $("#content h2").first().detach().appendTo("#content header");
      }
    }


    $('#studie').on('keypress keydown keyup', function(e) {
      if (e.keyCode == 13) {
        //console.log("Enter pressed...");
        e.preventDefault();
      }
    });


    $(document).on('click', '#studie .dropdown-menu a', function(e) {
      e.preventDefault();
      var filter = $(this).data("filter"),
        filterText = $(this).text();
      $('#main table').trigger('footable_filter', {
        filter: filter
      });
      //if(){
      //
      //}else{
      //
      //}
      //$('#content table caption .label').after('<span style="margin-left: 10px;">Filter: <span class="label label-info">' + filterText + '</span></span>');
    });


    //KD: temporary hack
    $(document).on('click', '#knapp1', function(e) {
      e.preventDefault();
      $(this).toggleClass("btn-line");
      $('#toggleme').slideToggle();
    });
  });
})();
