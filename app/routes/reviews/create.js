import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('performer-reviews');
  },

  actions:{
    saveReview: function(reviews){
      reviews.save();
      this.transitionTo('reviews.index');
    }
  }
});
