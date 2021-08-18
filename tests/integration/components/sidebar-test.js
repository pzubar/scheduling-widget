import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders properly when the request data is set', async function (assert) {
    const requestStub = {
      clinician: {
        firstName: 'Testy',
        lastName: 'McTest',
      },
      service: {
        description: 'Lorem Ipsum',
        duration: 1,
      },
      location: {
        name: 'Test Location',
        phone: '066 348 36 22',
      },
    };
    this.set('request', requestStub);

    await render(hbs`<Sidebar @request={{this.request}} />`);

    const { clinician, service, location } = requestStub;
    const { firstName, lastName } = clinician;
    const { description, duration } = service;

    // Clinician info is shown
    assert.dom(this.element).includesText(`${firstName} ${lastName}`);

    // Service info is shown
    assert.dom(this.element).includesText(description);
    assert.dom(this.element).includesText(`${duration} minute`);

    // Location info is shown
    assert.dom(this.element).includesText(location.name);
    assert.dom(this.element).includesText(location.phone);
  });
});
