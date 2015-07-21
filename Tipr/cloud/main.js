
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

var Stripe = require("stripe");
Stripe.initialize('sk_test_KVa4cVIz0oseq6NpHLl8NR77');

Parse.Cloud.define('checkout', function(request, response){
  Stripe.Charges.create({
    amount: 100,
    currency: "usd",
    card: request.params.token
  }, {
    success: function(){
      response.success('Thank you for the tip!');
    },
    error: function(err){
      response.error(err);
    }

});
});
