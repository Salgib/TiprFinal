import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  actions:{
    deleteReview: function(review){
      this.sendAction('action', review);
    }
  }
});
