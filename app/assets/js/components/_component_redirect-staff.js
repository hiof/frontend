(function(Hiof, undefined) {
    Hiof.setupRedirect = function() {
        //console.log("Hiof.redirectUsers is running");


        var options = {
            header: '<button type="button" class="close" onclick="Hiof.cancelRedirect();"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4>Hei, HiØ ansatt</h4>',
            content: "<p>Du vil bli sendt videre til ansatt sidene om 5 sekunder.</p><script>Hiof.redirectUsers();</script>",
            footer: '<button class="btn btn-primary" onclick="Hiof.redirectUsers(true);">Gå til ansatt sidene nå</button>'
        };


        var modal = Hiof.createModal(options);
        //(console.log(modal);
        $('#body').append(modal);
        $('.modal').modal();
    };

    Hiof.redirectUsers = function(redirect) {
        if (typeof redirect === 'undefined') {

            Hiof.setRedirectCookie();

            console.log("Hiof.redirectUsers(), 5 sekond delay");


            window.setTimeout(function() {
                //if ($.cookie('HiofRedirectEmployee') == 'true') {
                Hiof.redirectUsers(true);
                //}
            }, 5000);
        } else {
            if ($.cookie('HiofRedirectEmployee') == 'true') {
                console.log("You are now redirected to ansatt....");
                //window.location.href = "http://hiof.no/ansatt";
            }
        }
    };
    Hiof.cancelRedirect = function() {
        console.log("Hiof.cancelRedirect initiated");
        $.cookie('HiofRedirectEmployee', 'false', {
            path: '/',
            expires: 60
        });
        $('.modal').remove();
    };


    Hiof.setRedirectCookie = function() {
        $.cookie('HiofRedirectEmployee', 'true', {
            path: '/',
            expires: 7
        });
    };





    // Execute code
    $(function() {
        if ($('#redirect').length) {
            if ($.cookie('HiofRedirectEmployee') == 'false') {
                console.log("HiofRedirectEmployee is set to false");
                //$('.modal').modal();
            } else {
                Hiof.setupRedirect();
            }
        }



        $(document).on("click touchstart", ".modal", function(e) {
            e.preventDefault();
            Hiof.cancelRedirect();
            //$('.modal').remove();
        });


    });

})(window.Hiof = window.Hiof || {});
