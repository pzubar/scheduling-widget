import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | service-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const serviceStub = {
      description: 'Test desctiption',
      duration: 100,
    };

    this.set('service', serviceStub);
    this.set('selectService', () => {});

    await render(
      hbs`<ServiceCard @service={{this.service}} @selectService={{this.selectService}}/>`
    );

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
      [serviceStub.description, `${serviceStub.duration} minutes`, 'Select']
    );
  });
});
