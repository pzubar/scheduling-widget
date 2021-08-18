import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import convertElementContentToArray from '../../utils/convert-content-to-array';

module('Integration | Component | location-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders properly', async function (assert) {
    const locationStub = {
      name: 'Test Name',
      street: 'Test Street',
      city: 'Test City',
      state: 'Test State',
      zip: 'Test Zip',
      phone: '(066) 348-3622',
    };

    this.set('location', locationStub);
    this.set('selectLocation', () => {});

    await render(
      hbs`<LocationCard @location={{this.location}} @selectLocation={{this.selectLocation}}/>`
    );

    assert.deepEqual(convertElementContentToArray(this.element), [
      locationStub.name,
      locationStub.street,
      [locationStub.city, locationStub.state, locationStub.zip].join(', '),
      locationStub.phone,
      'Select',
    ]);
  });
});
