import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  cvc: DS.attr('string'),
  exp_month: DS.attr('string'),
  exp_year: DS.attr('string')

});
