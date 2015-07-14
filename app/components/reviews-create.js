import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveReview: function(){
      var stars = Number(this.$('input[name=rating]:checked').val());
      this.set('model.stars', stars);
      this.sendAction('action', this.get('model'));
    }
  }

});
