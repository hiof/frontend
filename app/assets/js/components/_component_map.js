// Defualt namespace
var Hiof = Hiof || {};


//Hiof.MapFredrikstad = {
//
//};
//
//
//Hiof.MapHalden = {
//  
//};








//Hiof.Map = function(){
//    Hiof.Map.Footer();
//    Hiof.Map.Halden();
//    Hiof.Map.Fredrikstad();
//
//};

Hiof.Map = {};



// Center - 59.2302809,11.1991417,15z      /////// 59.17171, 11.22253

// Campus Fredrikstad - 59.21313702139788,10.930860042572021

// Campus Halden - 59.12870517113603,11.353683471679688



Hiof.Map.Footer = function() {
    var map = L.map('map').setView([59.2302809, 11.1991417], 9);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i86knfo3'
    }).addTo(map);


    L.marker([59.21313702139788,10.930860042572021]).addTo(map)
        .bindPopup('<b>Høgskolen i Østfold</b><br /><a href="#">Campus Fredrikstad</a>.');
    L.marker([59.12870517113603,11.353683471679688]).addTo(map)
        .bindPopup('<b>Høgskolen i Østfold</b><br /><a href="#">Campus Halden</a>.');
};


Hiof.Map.Halden = function() {
    var mapHalden = L.map('mapHalden').setView([59.12870517113603, 11.353683471679688], 13);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i86knfo3'
    }).addTo(mapHalden);

    L.marker([59.12870517113603, 11.353683471679688]).addTo(mapHalden)
        .bindPopup('<b>Høgskolen i Østfold</b><br /><a href="#">Campus Halden</a>.');
};

Hiof.Map.Fredrikstad = function() {
    var mapFredrikstad = L.map('mapFredrikstad').setView([59.21313702139788,10.930860042572021], 14);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i86knfo3'
    }).addTo(mapFredrikstad);

    L.marker([59.21313702139788,10.930860042572021]).addTo(mapFredrikstad)
        .bindPopup('<b>Høgskolen i Østfold</b><br /><a href="#">Campus Fredrikstad</a>.');

};





$(function() {
    //Hiof.Map.Footer();
    if($('#mapHalden').length){
      Hiof.Map.Halden();
    }
    if($('#mapFredrikstad').length){
      Hiof.Map.Fredrikstad();
    }
});
