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
       title: "Johnny 5! is Alive!"
     });

     var bboy21Marker = new google.maps.Marker({
       position: bboy21,
       map: map,
       title: "Breakdancing on Main!"
     });

     var kennyGMarker = new google.maps.Marker({
       position: kennyG,
       map: map,
       title: "Kenny G playing Now!"
     });

  }.on('didInsertElement')




});
