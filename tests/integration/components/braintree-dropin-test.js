import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('braintree-dropin', 'Integration | Component | braintree dropin', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{braintree-dropin}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#braintree-dropin}}
      template block text
    {{/braintree-dropin}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
