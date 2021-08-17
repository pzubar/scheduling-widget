import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | location-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
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

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
      [
        locationStub.name,
        locationStub.street,
        [locationStub.city, locationStub.state, locationStub.zip].join(', '),
        locationStub.phone,
        'Select',
      ]
    );
  });
});
