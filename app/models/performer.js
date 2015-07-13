import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  type: DS.attr('string'),
  location: DS.attr('number')
});
