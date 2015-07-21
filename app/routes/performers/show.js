import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  
  actions:{
    sendToken: function(token){
      var self = this;
      var adapter = this.store.adapterFor('application');
      adapter.ajax("https://api.parse.com/1/functions/checkout", "POST", {
        data: {
          token: token,
          amount: 100
        }
      }).then(function(response) {
        console.log(response);
      });
    }
}

});
