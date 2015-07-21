import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    checkout: function(token){
      this.sendAction('checkout', token);
    }
  }

});
