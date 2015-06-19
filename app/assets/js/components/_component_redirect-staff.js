(function(Hiof, undefined) {
    Hiof.setupRedirect = function() {

        if ($.cookie('HiofRedirectEmployee') === 'false') {
            // Dont show the dialogbox
        } else {
            var options = {
                header: '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4>Hei, HiØ ansatt</h4>',
                content: "<p>Du blir nå redirigert til web-sidene for ansatte ved høgskolen.</p><script>Hiof.redirectUsers();</script>",
                footer: '<button id="redirect-dialog" class="btn btn-primary" onclick="Hiof.redirectUsers(true);">Gå til ansatt sidene</button>'
            };
            var modal = Hiof.createModal(options);
            //(console.log(modal);
            $('#body').append(modal);
            $('.modal').modal();
        }
    };
    // [KEDA] - This function redirects the user is the
    Hiof.redirectUsers = function(redirect) {
        if (typeof redirect === 'undefined') {

            Hiof.setRedirectCookie();

            window.setTimeout(function() {
                if ($.cookie('HiofRedirectEmployee') == 'true') {
                    Hiof.redirectUsers(true);
                }
            }, 5000);
        } else {
            //console.log("You are now redirected to ansatt....");
            window.location.href = "http://hiof.no/ansatt";
        }
    };

    // [KEDA] - This function cancel the redirect
    Hiof.cancelRedirect = function() {
        $.cookie('HiofRedirectEmployee', 'false', {
            path: '/',
            expires: 3
        });
        $('.modal').remove();
    };

    // [KEDA] - This function is currently not active
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
                //console.log("HiofRedirectEmployee is set to false");
                //$('.modal').modal();
            } else {
                Hiof.setupRedirect();
            }
        }
        $(document).on("click touchstart", ".modal, .close", function(e) {
            if ($('#redirect-dialog').length) {
                e.preventDefault();
                Hiof.cancelRedirect();
            }
        });
    });

})(window.Hiof = window.Hiof || {});
