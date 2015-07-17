import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.createRecord('review', {
      reviewer: this.get('session.currentUser'),
      // belongsTo: this.get(this.model('performer'))
    });
  },

  actions:{
    saveReview: function(reviews){
      console.log(reviews);
      reviews.save();
      this.transitionTo('reviews.index');
    }
  }
});
