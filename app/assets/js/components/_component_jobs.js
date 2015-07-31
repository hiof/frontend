(function(Hiof, undefined) {


  getJobs = function(lang) {
    var data;
    if (typeof lang === 'undefined') {
      lang = 'no';
    }
    $.ajax({
      url: 'http://hiof.no/api/v1/jobs/',
      method: 'GET',
      async: true,
      dataType: 'json',
      data: {
        lang: lang
      },
      success: function(data) {
        appendJobs(data);
      },
      error: function(data) {}

    });
  };


  appendJobs = function(data) {
    var ln = $('html').attr('lang');




    var uiText = Hiof.options.i18n[ln].jobs;
    //debug(data);

    // Add i18n to view
    data.view = {};
    data.view.title = uiText.title;
    data.view.deadline = uiText.deadline;
    data.view.description = uiText.description;
    data.view.readmore = uiText.readmore;



    var templateSource = Hiof.Templates['jobs/jobs'],
      markup = templateSource(data);

    $('#content .outlet').append(markup);
    $('#content .outlet table').footable();
    if ($('#jobs-available').length) {
      statusJobs(ln);
    }
  };
  statusJobs = function(ln) {
    if (ln === 'en') {
      $.ajax({
        url: 'http://hiof.no/api/v1/jobs/',
        method: 'GET',
        async: true,
        dataType: 'json',
        data: {
          lang: "no"
        },
        success: function(data) {
          $('#jobs-available-nb .badge').text(data.jobs.length);
        },
        error: function(data) {}

      });

    } else {
      //debug("test");
      $.ajax({
        url: 'http://hiof.no/api/v1/jobs/',
        method: 'GET',
        async: true,
        dataType: 'json',
        data: {
          lang: 'en'
        },
        success: function(data) {
          $('#jobs-available-en .badge').text(data.jobs.length);
        },
        error: function(data) {}

      });
    }
  };


  // On document load
  $(function() {
    if ($('#jobs-list').length) {
      getJobs();
    }
    if ($('#jobs-list-en').length) {
      getJobs('en');
    }
  });


  // Expose functions to the window
  window.Hiof.jobs = getJobs;

})(window.Hiof = window.Hiof || {});
