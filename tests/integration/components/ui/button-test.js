import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders properly', async function (assert) {
    this.set('onClick', () => {});
    // Template block usage:
    await render(hbs`
      <Ui::Button @onClick={{this.onClick}}>
        Button Text
      </Ui::Button>
    `);

    assert.dom(this.element).hasText('Button Text');
  });
});
