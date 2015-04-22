(function(Hiof, undefined) {

  setupFeedbackForm = function(ln) {

    $.getJSON("/assets/js/data/i18n.json", function(data) {
      var myData = data[ln]["feedback-form"];



      var clientOptions = Hiof.options.client;



      myData.clientLanguage = ln;
      myData.clientUrl = clientOptions.url;
      myData.clientBrowserName = clientOptions.browserName;
      myData.clientBrowserVersion = clientOptions.browserVersion;
      myData.clientOsName = clientOptions.osName;
      myData.clientOsVersion = clientOptions.osVersion;
      myData.clientViewportWidth = clientOptions.viewportWidth;
      myData.clientViewportHeight = clientOptions.viewportHeight;


      appendFeedbackForm(myData);
    });
    //return feedbackForm;
  };
  appendFeedbackForm = function(data) {
    var templateSource = Hiof.Templates['forms/feedback'],
      markup = templateSource(data);

    $('#main').append(markup);
    var formHeight = $('.feedback-form').height();
    $('.feedback').css('height', formHeight + 'px');
  };


  $(function() {
    if ($('#main').attr('data-page-category') === "page") {

      var lang = $('html').attr('lang');

      setupFeedbackForm(lang);

    }


    $('body').on('submit', '.feedback-form', function(e) {
      e.preventDefault();

      var formData = $('.feedback-form').serialize();
      $.ajax({
        url: "http://hiof.no/api/v1/feedback/",
        type: "POST",
        data: formData,
        beforeSend: function() {
          $('.feedback-form fieldset').attr('disabled', 'disabled');
        },
        success: function(data, textStatus, jqXHR) {
          //data - response from server
          //debug('success:' + data);
          $('.feedback-form').slideToggle();
          $('.feedback-form-success').slideToggle();
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $('.feedback-form fieldset').prop('disabled', false);
          //data - response from server
          //debug('error: ' + jqXHR + textStatus + errorThrown);
          //debug(textStatus);

        }
      });


    });

  });

})(window.Hiof = window.Hiof || {});
