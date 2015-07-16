import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({UnauthenticatedRouteMixin,
  model: function(){
    return Ember.RSVP.hash({
    performers: this.store.findAll('performer'),
    reviews: this.store.findAll('review')
  });
  }
});
