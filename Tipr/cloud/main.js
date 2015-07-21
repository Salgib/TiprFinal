
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:



Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});



Parse.Cloud.define('chargePayment', function(request, response){
  var stripe = require("stripe")("sk_test_KVa4cVIz0oseq6NpHLl8NR77");
  stripe.initialize('sk_test_KVa4cVIz0oseq6NpHLl8NR77');

var stripeToken = request.body.stripeToken;

var charge = stripe.charges.create({
  amount: 100, // amount in cents
  currency: "usd",
  source: stripeToken,
  description: "Tip this performer $1"
}, function(err, charge) {
  if (err && err.type === 'StripeCardError') {
    // The card has been declined
  }
});
});
