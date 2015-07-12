import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function(){
    var container = this.$('.map-canvas')[0];
    var options = {
      center: new window.google.maps.LatLng(34.851939, -82.399752),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new window.google.maps.Map(container, options);
  }.on('didInsertElement')
});
