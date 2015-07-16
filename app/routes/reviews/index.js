import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('review');
  },

  actions:{
    deleteReview: function(review){
      review.destroyRecord();
    }
  }


});
