import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import convertElementContentToArray from '../../utils/convert-content-to-array';

module('Integration | Component | service-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders properly', async function (assert) {
    const serviceStub = {
      description: 'Test desctiption',
      duration: 100,
    };

    this.set('service', serviceStub);
    this.set('selectService', () => {});

    await render(
      hbs`<ServiceCard @service={{this.service}} @selectService={{this.selectService}}/>`
    );

    assert.deepEqual(convertElementContentToArray(this.element), [
      serviceStub.description,
      `${serviceStub.duration} minutes`,
      'Select',
    ]);
  });
});
