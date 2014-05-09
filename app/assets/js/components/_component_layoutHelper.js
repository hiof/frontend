// Defualt namespace
var Hiof = Hiof || {};




Hiof.LayoutHelper = function(parrent) {
    //$(".lo")


    var classFirst = "lo-first",
        classLast = "lo-last";

    if ( typeof parrent !== 'undefined') {
      //console.log("Parrent variable is defined");
      //console.log(parrent);
      $('.lo-quarter', parrent).first().addClass(classFirst);
      $('.lo-quarter', parrent).last().addClass(classLast);
      //$(parrent + '.lo-quarter').addClass(classFirst);
    } else {

      //console.log("Parrent variable is not defined (fire standardcode)");
      // Half layout helper-inject
      if ($('.lo-auron-2-3 .lo-half').length) {
          $('.lo-half:even').addClass(classFirst);
          $('.lo-half:odd').addClass(classLast);
      }

      // Querter layout helper-inject
      //if ($('.lo-full .lo-quarter').length){
      //  $('.lo-full .lo-quarter').first().addClass(classFirst);
      //  $('.lo-full .lo-quarter').last().addClass(classLast);
      //}


      // Third layout helper-inject
      //if($('.lo-one-third').length){
      //  $('.lo-one-third:nth-child(3n+1)').addClass(classFirst);
      //  $('.lo-one-third:nth-child(3n+3)').addClass(classLast);
      //}

      //$('.lo-half').each(function(i) {
      // console.log(this);
      // //$.first
      // if ( i === 0 ) {
      // }
      // if ( i === 1 ) {
      //   
      // }
      //});
    }
};


Hiof.LayoutAddFirstLastClass = function(element, cssHelper) {
    element.addClass(cssHelper);
};

Hiof.EqualHeight = function(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);

};


Hiof.EqualHeightContentAndSidebar = function() {
    var highestCol = Math.max($('#content').height(), $('#sidebar').height());
    $('#content, #sidebar').height(highestCol);
};
