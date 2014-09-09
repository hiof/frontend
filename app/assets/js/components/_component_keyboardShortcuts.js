// Defualt namespace
var Hiof = Hiof || {};

Hiof.KeyboardShortcuts = function(e) {
    e.preventDefault();

    var altKey = e.altKey,
        altPlusA = (altKey && e.keyCode == 65),
        altPlusS = (altKey && e.keyCode == 83),
        altPlusZero = (altKey && e.keyCode == 48) || (altKey && e.keyCode == 96),
        altPlusOne = (altKey && e.keyCode == 49) || (altKey && e.keyCode == 97),
        altPlusTwo = (altKey && e.keyCode == 50) || (altKey && e.keyCode == 98),
        altPlusThree = (altKey && e.keyCode == 51) || (altKey && e.keyCode == 99),
        altPlusFour = (altKey && e.keyCode == 52) || (altKey && e.keyCode == 100),
        altPlusFive = (altKey && e.keyCode == 53) || (altKey && e.keyCode == 101),
        altPlusSix = (altKey && e.keyCode == 54) || (altKey && e.keyCode == 102),
        altPlusSeven = (altKey && e.keyCode == 55) || (altKey && e.keyCode == 103) || (altKey && e.keyCode == 220),
        altPlusEight = (altKey && e.keyCode == 56) || (altKey && e.keyCode == 104) || (altKey && e.keyCode == 219),
        altPlusNine = (altKey && e.keyCode == 57) || (altKey && e.keyCode == 105) || (altKey && e.keyCode == 221);

    if (altPlusA) {
        $.scrollTo($("#content"), 500, {
            axis: 'y',
            offset: {
                top: -62
            }
        });
    }
    if (altPlusS) {
        // Study index
        //console.log(" alt + S - pressed");
        window.location = "/studier";
    }
    if (altPlusZero) {
        // Universal access information
        //console.log(" alt + 0 - pressed");
        window.location = "/?ID=30038";
    }
    if (altPlusOne) {
        // Index
        //console.log(" alt + 1 - pressed");
        window.location = "/";
    }
    if (altPlusTwo) {
        // Student intranet
        //console.log(" alt + 2 - pressed");
        window.location = "http://www2.hiof.no/student";
    }
    if (altPlusThree) {
        // Fronter innlogging
        //console.log(" alt + 3 - pressed");
        window.location = "http://www2.hiof.no/fronter";
    }
    if (altPlusFour) {
        // Employee intranet
        //console.log(" alt + 4 - pressed");
        window.location = "http://www2.hiof.no/ansatt";
    }
    if (altPlusFive) {
        // Search
        //console.log(" alt + 5 - pressed");
        //window.location.hash = "#search";
        Hiof.Search.Toggle();
        $("#global-search-input").focus();
    }
    if (altPlusSix) {
        // It-help
        //console.log(" alt + 6 - pressed");
        window.location = "https://www2.hiof.no/?ID=22512";
    }
    if (altPlusSeven) {
        // Contact
        //console.log(" alt + 7 - pressed");
        window.location = "/index.php?ID=612";
    }
    if (altPlusEight) {
        // Relevant information
        //console.log(" alt + 8 - pressed");
        window.location = "/index.php?ID=30037";
    }
    if (altPlusNine) {
        // Fronter innlogging
        //console.log(" alt + 9 - pressed");
        //window.location = "index2.html";
    }


};
