import Ember from 'ember';

export default Ember.Component.extend({
  stripe: Ember.inject.service(),
  myCreditCardProcessingMethod: function() {

    var customer = this.get('customer');

    // obtain access to the injected service
    var stripe = this.get('stripe');

    // if for example you had the cc set in your controller
    var card = this.get('creditCard');

    return stripe.card.createToken(card).then(function(response) {
      // you get access to your newly created token here
      customer.set('stripeToken', response.id);
      return customer.save();
    })
    .then(function() {
      // do more stuff here
    })
    .catch(function(response) {
      // if there was an error retrieving the token you could get it here

      if (response.error.type === 'card_error') {
        // show the error in the form or something
      }
    });
  }
})
