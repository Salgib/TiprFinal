import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.getJSON('/performers/' +params.performer_id);
  },


});
