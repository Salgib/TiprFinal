import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('stripe-checkout', 'Integration | Component | stripe checkout', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stripe-checkout}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#stripe-checkout}}
      template block text
    {{/stripe-checkout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
