import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  stars: DS.attr('number'),

  reviewer: DS.belongsTo('parseUser', {async: true}),
  performer: DS.belongsTo('performer', {async: true})

});
