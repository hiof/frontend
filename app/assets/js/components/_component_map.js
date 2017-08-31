// Defualt namespace
//var Hiof = Hiof || {};


//Hiof.MapFredrikstad = {
//
//};
//
//
//Hiof.MapHalden = {
//
//};



(function() {

  var Hiof = Hiof || {};

  //Hiof.Video = {};




//Hiof.Map = function(){
//    Hiof.Map.Footer();
//    Hiof.Map.Halden();
//    Hiof.Map.Fredrikstad();
//
//};

    Hiof.Map = {
        bothLat: 59.2302809,
        bothLng: 11.1991417,
        bothZoom: 8,
        haldenLat: 59.12870517113603,
        haldenLng: 11.353683471679688,
        haldenZoom: 14,
        fredrikstadLat: 59.21313702139788,
        fredrikstadLng: 10.930860042572021,
        fredrikstadZoom: 15
    };



// Center - 59.2302809,11.1991417,15z      /////// 59.17171, 11.22253

// Campus Fredrikstad - 59.21313702139788,10.930860042572021

// Campus Halden - 59.12870517113603,11.353683471679688


    // Config the default image path for the Leafletjs plugin
    L.Icon.Default.imagePath = '/assets/images/icons/leaflet/';

    Hiof.Map.Both = function() {
        // set up the map
        map = new L.Map('mapBoth');

        // create the tile layer with correct attribution
        var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 7, maxZoom: 16, attribution: osmAttrib});

        // start the map at Stuediested Halden
        map.setView(new L.LatLng(Hiof.Map.bothLat, Hiof.Map.bothLng),Hiof.Map.bothZoom);
        map.addLayer(osm);

        // Add marker
        var marker = L.marker([Hiof.Map.haldenLat, Hiof.Map.haldenLng]).addTo(map);
        marker.bindPopup("<b>Høgskolen i Østfold</b><br>Studiested Halden").openPopup();

        var markerFred = L.marker([Hiof.Map.fredrikstadLat, Hiof.Map.fredrikstadLng]).addTo(map);
        markerFred.bindPopup("<b>Høgskolen i Østfold</b><br>Studiested Fredrikstad").openPopup();

    };


    Hiof.Map.Halden = function() {


        // set up the map
        map = new L.Map('mapHalden');

        // create the tile layer with correct attribution
        var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 7, maxZoom: 16, attribution: osmAttrib});

        // start the map at Stuediested Halden
        map.setView(new L.LatLng(Hiof.Map.haldenLat, Hiof.Map.haldenLng),Hiof.Map.haldenZoom);
        map.addLayer(osm);

        // Add marker
        var marker = L.marker([Hiof.Map.haldenLat, Hiof.Map.haldenLng]).addTo(map);
        marker.bindPopup("<b>Høgskolen i Østfold</b><br>Studiested Halden").openPopup();


    };

    Hiof.Map.Fredrikstad = function() {

        // set up the map
        map = new L.Map('mapFredrikstad');

        // create the tile layer with correct attribution
        var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 7, maxZoom: 16, attribution: osmAttrib});

        // start the map at Stuediested Halden
        map.setView(new L.LatLng(Hiof.Map.fredrikstadLat, Hiof.Map.fredrikstadLng),Hiof.Map.fredrikstadZoom);
        map.addLayer(osm);

        // Add marker
        var marker = L.marker([Hiof.Map.fredrikstadLat, Hiof.Map.fredrikstadLng]).addTo(map);
        marker.bindPopup("<b>Høgskolen i Østfold</b><br>Studiested Fredrikstad").openPopup();

    };





    $(function() {
        //Hiof.Map.Footer();
        if($('#mapBoth').length){
          Hiof.Map.Both();
        }
        if($('#mapHalden').length){
          Hiof.Map.Halden();
        }
        if($('#mapFredrikstad').length){
          Hiof.Map.Fredrikstad();
        }
    });


})();
