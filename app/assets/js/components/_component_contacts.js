// Defualt namespace
var Hiof = Hiof || {};



//Hiof.Search = {};

Hiof.ChangeContactSearch = function(val){
  console.log(val);
  //$("div[id^='functionbuilder']").hide();
  //$(el).slideDown();
  if (val === "1"){
    window.location.href = "/index.php?ID=4850";
  }else if(val === "2"){
    window.location.href = "/index.php?ID=30002";
  }
};




Hiof.ChangeExpertiseSearch = function(el){
  //console.log(value);
  $("div[id^='functionbuilder']").hide();
  $(el).slideDown();
};

//changeFunctionBuilder