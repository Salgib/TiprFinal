import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
    performer: this.store.find('performer', params.performer_id),
    reviews: this.store.findAll('review')
  });
  }
});
