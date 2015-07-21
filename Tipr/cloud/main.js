
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

var stripe = require("stripe");
stripe.initialize('sk_test_KVa4cVIz0oseq6NpHLl8NR77');

Parse.Cloud.define('checkout', function(request, response){
  Stripe.charges.create({
    amount: 100,
    currency: "usd",
    card: request.params.token
  }, {
    success: function(){
      // response.success('Thank you for the tip!');
      var stripe = require("stripe")("sk_test_KVa4cVIz0oseq6NpHLl8NR77");
      var stripeToken = request.body.stripeToken;
      var charge = stripe.charges.create({
        amount: 100,
        currency: "usd",
        source: stripeToken,
        description: "Tip this peformer $1"
      }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
          // The card has been declined
        }
      });
    },
    error: function(){
      response.error(err);
    }
  }
)};
);
