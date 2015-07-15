import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update: function(){
      var stars = Number(this.$('input[name=rating]:checked').val());
      this.set('model.stars', stars);
      this.sendAction('action', this.get('model'));
    },

    deleteReview: function(review){
      this.sendAction('action', review);
    }
  }

});
