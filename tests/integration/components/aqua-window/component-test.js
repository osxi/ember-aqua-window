import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aqua-window', 'Integration | Component | aqua window', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{aqua-window}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#aqua-window}}
      template block text
    {{/aqua-window}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('can unescape HTML content', function(assert) {
  this.set('html', `<h2>Welcome to Ember</h2>`);

  this.render(hbs`
    {{aqua-window content=html}}
  `);

  let h2Length = this.$('h2').length;

  assert.equal(h2Length, 1, 'One <h1> tag is rendered.');
});
