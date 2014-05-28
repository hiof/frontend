// Defualt namespace
var Hiof = Hiof || {};


Hiof.ChangeContactSearch = function(value){
  console.log(value);
  $("div[id^='functionbuilder']").hide();
  $(value).slideDown();

};


//changeFunctionBuilder