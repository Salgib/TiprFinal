import Ember from 'ember';

export default Ember.Route.extend({


  actions:{
    update: function(){
      var review = this.modelFor(this.routeName);
      review.save();
      this.transitionTo('reviews.index');
    }


  }
});
