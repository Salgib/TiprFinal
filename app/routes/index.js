import Ember from 'ember';
import ajax from 'ic-ajax';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({UnauthenticatedRouteMixin,
  model: function(){
    return this.store.all('performer');
  }
});
