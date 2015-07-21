import Ember from 'ember';
import config from '../config/environment';


export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['stripe-checkout'],
  attributeBindings: ['isDisabled:disabled'],
  key: 'pk_test_rZElzrV3eXXSjJM5fqXVxUzF',
  image: '.././images/tiprlogo.svg',
  name: "Tipr",
  description: "Tip This performer $1",
  amount: 100,
  bitcoin: false,
  currency: "USD",
  panelLabel: null,
  zipCode: false,
  address: false,
  email: null,
  label: "Pay with card",
  allowRememberMe: true,
  isDisabled: false,
  handler: null,



  useStripeStyles: true,

  setupStripe: Ember.on('init', function() {
    var self = this;

    if (Ember.isNone(this.get('key'))) {
      throw [
        "Your Stripe key must be set to use the stripe-checkout component. ",
        "Set the key in your environment.js file (ENV.stripe.key) or set the ",
        "key property on the component when instantiating it in your hbs template. ",
        "Find your Stripe publishable key at https://dashboard.stripe.com/account/apikeys"
      ].join('\n');
    }

    var handler = StripeCheckout.configure({
      key: this.get('key'),
      token: function(token) {
        self.sendAction('action', token);
      },
      opened: function() {
        self.sendAction('opened');
      },
      closed: function() {
        self.sendAction('closed');
      }
    });
    this.set('handler', handler);
  }),

  click: function(e) {
    this.openModal();
    e.preventDefault();
  },


  openModal: function() {
    var options = this.getProperties([
      'image',
      'name',
      'description',
      'amount',
      'bitcoin',
      'currency',
      'panelLabel',
      'zipCode',
      'address',
      'email',
      'label',
      'allowRememberMe'
    ]);
    this.get('handler').open(options);
  },

  closeOnDestroy: Ember.on('willDestroyElement', function() {
    this.get('handler').close();
  })
});
