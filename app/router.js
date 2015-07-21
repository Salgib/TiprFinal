import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('performers', function(){
    this.route('show', {path: ':performer_id'}, function() {
      this.route('pay');
    });
  });
  this.route('users', function() {
    this.route('create');
    this.route('current');
  });
  this.route('reviews', function() {
    this.route('create');
    this.route('show', {path: ':review_id'});
    this.route('update', {path: ':review_id/edit'});
  });
  this.route('charge');
  this.route('stripe-payment');
});

export default Router;
