var Hiof = Hiof || {};

Hiof.Toolbar.Print = function() {


    if ($("#toolbar").length) {
        var button = '<li><button id="print-page" class="btn" onclick="javascript:window.print()" title="Print denne siden">Print denne siden</button></li>';
        $("#toolbar").append(button);
        svgPrint = Hiof.getSvgIcon("print");
        //console.log(svgFacebook);
        $("#print-page").html("").addClass("btn-icon btn-print").append(svgPrint).prepend('<span class="helper-text">Print</span>');
    } else {
    }
};
