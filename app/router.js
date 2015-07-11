import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('performers', function(){
    this.route('show', {path: '/:performer_id'});
  });
  this.route('users', function() {
    this.route('create');
    this.route('current');
  });
  this.route('reviews', function() {
    this.route('create');
    this.route('show', {path: '/review_id'});
  });
  this.route('performers.index');
});

export default Router;
