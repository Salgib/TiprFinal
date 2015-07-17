import Ember from 'ember';

export default Ember.Component.extend({


  insertMap: function(){
    var container = this.$('.map-canvas')[0];
    var greenville = new google.maps.LatLng(34.851939, -82.399752);
    var johnny5 = new google.maps.LatLng(34.851578, -82.398507);
    var bboy21 = new google.maps.LatLng(34.850629, -82.398897);
    var kennyG = new google.maps.LatLng(34.851732, -82.398638);

    var options = {
      center: greenville,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };



     var map = new window.google.maps.Map(container, options);
     var j5Marker = new google.maps.Marker({
       position: johnny5,
       map: map,
       url: 'http://localhost:4200/performers/uSq7jX8uYJ',
       title: "Johnny 5! is Alive!"
     });
     google.maps.event.addListener(j5Marker, 'click', function(){
       window.location.href = j5Marker.url;
     });




     var bboy21Marker = new google.maps.Marker({
       position: bboy21,
       url: 'http://localhost:4200/performers/ZjauzsC6Ij',
       map: map,
       title: "Breakdancing on Main!"
     });
     google.maps.event.addListener(bboy21Marker, 'click', function(){
       window.location.href = bboy21Marker.url;
     });

     var kennyGMarker = new google.maps.Marker({
       position: kennyG,
       map: map,
       url: 'http://localhost:4200/performers/2hjrb0dBRA',
       title: "Kenny G playing Now!"
     });
     google.maps.event.addListener(kennyGMarker, 'click', function(){
       window.location.href = kennyGMarker.url;
     });


  }.on('didInsertElement')





});
