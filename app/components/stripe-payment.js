import Ember from 'ember';


export default Ember.Component.extend({

  stripe: Ember.inject.service(),
  actions:{
    ccPayment: function(creditCard) {

    var customer = this.get('customer');

    var stripe = this.get('stripe');

    var card = this.get('creditCard');

    return stripe.card.createToken(card).then(function(response) {
      customer.set('stripeToken', response.id);
      return customer.save();
    })
    .then(function() {
      Parse.Cloud.run('chargePayment', token)
    })
    .catch(function(response) {
      if (response.error.type === 'card_error') {
      }
    });

    this.sendAction('action', creditCard);
   }
  }
})
