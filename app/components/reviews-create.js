import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveReview: function(){
      this.sendAction('action', this.get('model'));
    }
  }

});
