// Defualt namespace
var Hiof = Hiof || {};


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


Hiof.EqualHeightContentAndSidebar = function(){
  var highestCol = Math.max($('#content').height(),$('#sidebar').height());
  $('#content, #sidebar').height(highestCol);
};