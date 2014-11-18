(function(Hiof, undefined) {





    Hiof.pageFooterToolbar = function() {





        if ($("#index").length) {

        } else {


            var lang = Hiof.languageCheck(),
                shareText;

            if (lang === "nor") {
                shareText = "Del eller skriv ut denne siden";
            } else {
                shareText = "Share or print this page";
            }

            var footerElement = document.createElement('footer'),
                headerElement = document.createElement('header'),
                heading = document.createElement('h2'),
                menu = document.createElement('ul');


            $(footerElement).addClass('lo-full');
            $(headerElement).addClass('lo-full');
            $(heading).text(shareText);
            $(menu).addClass('btn-group').attr('id', 'toolbar');


            //$(headerElement).append();
            $(footerElement).append($(heading), $(menu));



            $("#main").append($(footerElement));
        }
    };



    Hiof.pageFooterToolbarPrint = function() {

        if ($("#toolbar").length) {

            var lang = Hiof.languageCheck(),
                printText,
                printThisPage;

            if (lang === "nor") {
                printText = "Print";
                printThisPage = "Print denne siden";
            } else {
                printText = "Print";
                printThisPage = "Print this page";
            }



            var button = '<button id="print-page" class="btn btn-primary btn-line" onclick="javascript:window.print()" title="' + printThisPage + '">' + printThisPage + '</button>';
            $("#toolbar").append(button);
            svgPrint = Hiof.getSvgIcon("print");
            //console.log(svgFacebook);
            if (!$("html").hasClass("lt-ie10")) {
                $("#print-page").html("").addClass("btn-icon").append(svgPrint).prepend('<span class="helper-text">' + printText + '</span>');
            }

        }
    };


    Hiof.pageFooterToolbarShare = function() {

        if ($("#toolbar").length) {

            var lang = Hiof.languageCheck(),
                facebook = "Facebook",
                twitter = "Twitter",
                LinkedIn = "LinkedIn",
                sharePage;

            if (lang === "nor") {
                sharePage = "Del på ";
            } else {
                sharePage = "Share page on ";
            }





            var socialMenu = '<button id="social-facebook" class="btn btn-primary btn-line" onclick="javascript:Hiof.shareFacebook()">' + sharePage + facebook + '</button>';
            socialMenu += '<button id="social-twitter" class="btn btn-primary btn-line" onclick="javascript:Hiof.shareTwitter()">' + sharePage + twitter + '</button>';
            socialMenu += '<button id="social-linkedin" class="btn btn-primary btn-line" onclick="javascript:Hiof.shareLinkedIn()">' + sharePage + LinkedIn + '</button>';

            $("#toolbar").append(socialMenu);

            svgFacebook = Hiof.getSvgIcon("facebook");
            svgTwitter = Hiof.getSvgIcon("twitter");
            svgLinkedIn = Hiof.getSvgIcon("linkedin");
            //console.log(svgFacebook);
            if (!$("html").hasClass("lt-ie10")) {
                $("#social-facebook").html("").addClass("btn-icon").append(svgFacebook).prepend('<span class="helper-text">' + sharePage + facebook + '</span>');
                $("#social-twitter").html("").addClass("btn-icon").append(svgTwitter).prepend('<span class="helper-text">' + sharePage + twitter + '</span>');
                $("#social-linkedin").html("").addClass("btn-icon").append(svgLinkedIn).prepend('<span class="helper-text">' + sharePage + LinkedIn + '</span>');
            }

            //$("#social-twitter").append(svgTwitter);
        }
    };

    // Execute functions
    $(function(){
      // Append toolbar
      //console.log("Dette er en test");
      Hiof.pageFooterToolbar();
      Hiof.pageFooterToolbarShare();
      Hiof.pageFooterToolbarPrint();
    });
})(window.Hiof = window.Hiof || {});
