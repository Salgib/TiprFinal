import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteReview: function(review){
      this.sendAction('action', review);
    }
  }
});
