(function(Hiof, undefined) {




    AddCookieDisclaimerToPage = function() {




        var cookieDisclaimer = '<div id="cookie-disclaimer" class="cookie-disclaimer"> ' +
            '  <p>Høgskolen i Østfold bruker cookies på sine nettsider for bl.a. statistikk og forbedring av innholdet.</p> ' +
            '  <p>Bruk siden som normalt, eller lukk informasjonsboksen for å akseptere bruk av cookies. <a href="http://www.hiof.no/?ID=30538" title="Bruk av cookies" class="local">Les mer om bruken av cookies.</a></p> ' +
            '  <a href="#" id="btnClose"  class="btn btn-primary btn-line cookie-disclaimer-close">Lukk</a> ' +
            '</div>';

        $("#body").append($(cookieDisclaimer));
    };

    $(function() {
        if ($.cookie('CookieAccept') != 'true') {
            AddCookieDisclaimerToPage();
        }
        $("#body").on('click', '.cookie-disclaimer-close', function() {
            $.cookie('CookieAccept', 'true', {
                path: '/',
                expires: 60
            });
            document.getElementById('cookie-disclaimer').style.display = 'none';
        });
    });
})(window.Hiof = window.Hiof || {});
