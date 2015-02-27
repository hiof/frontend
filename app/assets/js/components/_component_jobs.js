(function(Hiof, undefined) {


  getJobs = function(){
    $.ajax({
      url: 'http://hiof.no/api/v1/jobs/',
      method: 'GET',
      async: true,
      dataType: 'json',
      //data: settings,
      success: function(data) {
        appendJobs(data);
      },
      error: function(data) {
      }

    });
  };

  appendJobs = function(data){
    var templateSource = Hiof.Templates['jobs/jobs'],
        markup = templateSource(data);

    $('#content .outlet').append(markup);
    $('#content .outlet table').footable();
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