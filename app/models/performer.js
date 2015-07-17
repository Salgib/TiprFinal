import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  type: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  act: DS.attr('string'),
  email: DS.attr('string'),
  stars: DS.attr('number'),


  qrcode: DS.attr(),
  profilepic: DS.attr(),
  profilepicsmall: DS.attr()



});
