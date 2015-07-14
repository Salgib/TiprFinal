import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.get('session.currentUser');
  },
  //
  // actions: {
  //   invalidateSession: function(){
  //     this.get('session').invalidate();
  //     }
  //   }



});
