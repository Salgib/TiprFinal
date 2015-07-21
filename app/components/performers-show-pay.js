import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['users-show-pay-container'],



  didInsertElement: function(){
  this.handler = StripeCheckout.configure({
    key: 'pk_test_rZElzrV3eXXSjJM5fqXVxUzF',
    img: '.././images/tiprlogosmall.svg',
    token: this.handleToken.bind(this)

    });
  },

  handleToken: function(token){
    this.sendAction('action', token.id);
  },

  actions: {

    checkout: function(){
      this.handler.open({
        name: 'Tipr',
        description: 'Tip this performer!',
        amount: 100,
        panelLabel: 'Pay'
      });
    }
  }




});
