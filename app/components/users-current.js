import Ember from 'ember';

export default Ember.Component.extend({

  model: function(){
    return this.store.findAll('User');
  },

  actions: {
    invalidateSession: function(){
      this.sendAction('action', this.get('model'));
    },

    goToPerson: function(){
      this.transitionTo('performers/:id');
    }
  }
});
