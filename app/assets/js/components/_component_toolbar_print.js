var Hiof = Hiof || {};

Hiof.Toolbar.Print = function() {



  var lang = Hiof.Language.Check(),
      printText, 
      printThisPage;

  if (lang === "nor"){
    printText = "Print";
    printThisPage = "Print denne siden";
  }else{
    printText = "Print";
    printThisPage = "Print this page";
  }


    if ($("#toolbar").length) {
        var button = '<li><button id="print-page" class="btn" onclick="javascript:window.print()" title="' + printThisPage + '">' + printThisPage + '</button></li>';
        $("#toolbar").append(button);
        svgPrint = Hiof.getSvgIcon("print");
        //console.log(svgFacebook);
        $("#print-page").html("").addClass("btn-icon btn-print").append(svgPrint).prepend('<span class="helper-text">' + printText +'</span>');
    } else {
    }
};
