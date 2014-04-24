$(function(){

  //console.log("Hello world from navigation.js");


  // Page navigation
  $(".nav-page a").on("click", function(e){
    e.preventDefault();
    var url = $(this).attr("href");

    $.scrollTo($(url), 500, {axis:'y', offset: {top:-62}});
  });

  //$(".nav-page a").scrollTo( $('div li:eq(14)'), 800 );


});