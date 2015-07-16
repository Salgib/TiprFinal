import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    act: DS.attr('string'),
    type: DS.attr('string'),
    performers: DS.hasMany('performer'),
    reviews: DS.hasMany('review')
  });
}

export default {
  name: 'parse-user',
  initialize: initialize
};
