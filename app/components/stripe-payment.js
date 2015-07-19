import Ember from 'ember';

export default Ember.Component.extend({

  actions:{

  stripePayment: function(){

    var handler = StripeCheckout.configure({
        key: 'pk_test_rZElzrV3eXXSjJM5fqXVxUzF',
        image: '/img/documentation/checkout/marketplace.png',
        token: function(token) {
          var stripe = require("stripe")(
            "sk_test_KVa4cVIz0oseq6NpHLl8NR77"
          );
          stripe.tokens.create({
            card: {
              "number": '4242424242424242',
              "exp_month": 12,
              "exp_year": 2016,
              "cvc": '123'
            }
          }, function(err, token){
            //asynchronously called
          });
        }
      });

      $('#tip-one').on('click', function(e) {
        // Open Checkout with further options
        handler.open({
          name: 'saljgib',
          description: 'Tip $1',
          amount: 100
        });
        e.preventDefault();
      });

      // Close Checkout on page navigation
      $(window).on('popstate', function() {
        handler.close();
      });
    }
  }
});
