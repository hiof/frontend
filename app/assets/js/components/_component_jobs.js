(function(Hiof, undefined) {


  getJobs = function(){
    $.ajax({
      url: 'http://hiof.no/api/v1/jobs/',
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
    var templateSource = Hiof.Templates['jobs/jobs'],
        markup = templateSource(data);

    $('#content .outlet').append(markup);
  };


  // On document load
  $(function() {
    if ($('#jobs-list').length) {
      getJobs();
    }
  });


  // Expose functions to the window
  window.Hiof.jobs = getJobs;

})(window.Hiof = window.Hiof || {});