(function(Hiof, undefined) {



  Hiof.studyDuplicateStudyCourseFacts = function() {

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



  Hiof.studyExecuteFilterFromUrl = function() {
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



  $(function() {





    if ($('#studie').length) {
      window.footable.options.filter.filterFunction = function(index) {
        var $t = $(this),
          $table = $t.parents('table:first'),
          filter = $table.data('current-filter').toUpperCase(),
          columns = $t.find('td');

        var regEx = new RegExp(filter);
        var result = false;
        for (i = 0; i < columns.length; i++) {
          var text = $(columns[i]).text();
          result = regEx.test(text.toUpperCase());
          if (result === true)
            break;

          if (!$table.data('filter-text-only')) {
            text = $(columns[i]).data("value");
            if (text)
              result = regEx.test(text.toString().toUpperCase());
          }

          if (result === true)
            break;
        }
        return result;
      };

    }






    $(document).on('click', '#studie .checkbox input', function(e) {
      var thisFilter = $('form').serialize(),
        thisValue = $(this).attr('value'),
        filter = "",
        totalCheckboxtypeStudy = $('input[name=typeStudy]:checked').length - 1,
        totalCheckboxFagomraader = $('input[name=fagomraader]:checked').length - 1,
        totalCheckboxOvrigeStudierAlternativer = $('input[name=OvrigeStudierAlternativer]:checked').length - 1,
        totalCheckboxStudiested = $('input[name=studiested]:checked').length - 1;


      //console.log("Total checkbox: " + totalCheckbox);

      if ($('input[name=typeStudy]').is(':checked')) {
        filter += "(?=.*(";
      }


      $('input[name=typeStudy]:checked').each(function(i, item) {
        //console.log("Filter for typeStudy");

        if (this.checked) {

          //console.log('Item is:' + i);
          if (i === totalCheckboxtypeStudy) {
            filter += $(this).val() + "";
          } else {
            filter += $(this).val() + "|";
            //console.log($(this).val()); 
          }


        }
      });

      if ($('input[name=typeStudy]').is(':checked')) {
        filter += "))";

      }
      //console.log(filter);
      //console.log("------------------------");



      if ($('input[name=fagomraader]').is(':checked')) {
        filter += "(?=.*(";
      }


      $('input[name=fagomraader]:checked').each(function(i, item) {
        //console.log("Filter for fagomraader");

        if (this.checked) {
          //filter += "(";
          //console.log('Item is:' + i);
          if (i === totalCheckboxFagomraader) {
            filter += $(this).val() + "";
          } else {
            filter += $(this).val() + "|";
            //console.log($(this).val()); 
          }

          //filter += ")";
        }
      });
      if ($('input[name=fagomraader]').is(':checked')) {
        filter += "))";
      }
      //console.log(filter);
      //console.log("------------------------");


      if ($('input[name=OvrigeStudierAlternativer]').is(':checked')) {
        filter += "(?=.*(";
      }
      $('input[name=OvrigeStudierAlternativer]:checked').each(function(i, item) {
        //console.log("Filter for OvrigeStudierAlternativer");

        if (this.checked) {
          //console.log('Item is:' + i);
          if (i === totalCheckboxOvrigeStudierAlternativer) {
            filter += $(this).val() + "";
          } else {
            filter += $(this).val() + "|";
            //console.log($(this).val()); 
          }

        }
      });

      if ($('input[name=OvrigeStudierAlternativer]').is(':checked')) {
        filter += "))";
      }


      //console.log(filter);
      //console.log("------------------------");



      if ($('input[name=studiested]').is(':checked')) {
        filter += "(?=.*(";
      }

      $('input[name=studiested]:checked').each(function(i, item) {
        //console.log("Filter for studiested");
        if (this.checked) {
          //console.log('Item is:' + i);
          if (i === totalCheckboxStudiested) {
            filter += $(this).val() + "";
          } else {
            filter += $(this).val() + "|";
            //console.log($(this).val()); 
          }

        }
      });
      if ($('input[name=studiested]').is(':checked')) {
        filter += "))";
      }
      //console.log(filter);
      //console.log("------------------------");
      $('#main table').trigger('footable_filter', {
        filter: filter
      });
    });









    // Check if you are on the study page
    if ($("#studie").length) {
      Hiof.studyExecuteFilterFromUrl();
    }
    // Check if you are within a study-page
    if ($("#program-KS601").length) {
      Hiof.studyDuplicateStudyCourseFacts();
    }

    // Fix the name of a studyplan on the Norwegian page
    if ($(".lang-nb #KS033").length > 0) {
      var showDetailsUrl = $("#content a").first().attr('href');
      if (showDetailsUrl.toLowerCase().indexOf("studieplaner") >= 0) {
        var showDetails = $("#content a").first(),
          newShowDetails = $(showDetails).clone().addClass("btn btn-primary").text("Vis studie-/fagplan med emnebeskrivelse");
        $(showDetails).remove();
        $("#content h1").first().remove();
        $("#content h2").first().after(newShowDetails);
        $("#content h2").first().detach().appendTo("#content header");
        $('#content header').find('h2').replaceWith(function() {
          return '<h1>' + $(this).text() + '</h1>';
        });
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
})(window.Hiof = window.Hiof || {});
