(function(Hiof, undefined) {


  getResearch = function(){

    var username = $('#cristin-data-integration').attr('data-cristin-username');

    $.ajax({
      url: 'http://hiof.no/api/v1/cristin/?username=' + username,
      method: 'GET',
      async: false,
      dataType: 'json',
      //data: settings,
      success: function(data) {
        //console.log("Success: ");
        //console.log(data);
        //Hiof.articleDisplayView(data, settings);
        appendJobs(data);
      },
      error: function(data) {
        //console.log("Error: ");
        //console.log(data);
      }

    });
  };

  appendJobs = function(data){
    var templateSource = Hiof.Templates['research/profile-research-list'],
        markup = templateSource(data);

    $('#content .outlet').append(markup);
    $('.footable').trigger('footable_redraw');
  };


  // On document load
  $(function() {
    if ($('#cristin-data-integration').length) {
      getResearch();
    }
  });


  // Expose functions to the window
  window.Hiof.research = getResearch;

})(window.Hiof = window.Hiof || {});