import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import RouterService from 'scheduling-widget/tests/stubs/router-service';

module('Unit | Controller | request/location', function (hooks) {
  setupTest(hooks);

  test('selectLocation method works properly', function (assert) {
    const store = this.owner.lookup('service:store');
    const location = store.createRecord('location', { name: 'Test' });
    const request = store.createRecord('request', {});

    this.owner.register('service:router', RouterService);

    const controller = this.owner.lookup('controller:request/location');

    assert.equal(request.location.get('name'), undefined);
    controller.send('selectLocation', location);
    assert.equal(request.location.get('name'), location.get('name'));
  });
});
