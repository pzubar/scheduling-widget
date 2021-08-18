import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import RouterService from 'scheduling-widget/tests/stubs/router-service';

module('Unit | Controller | request/service', function (hooks) {
  setupTest(hooks);

  test('selectService method works properly', function (assert) {
    const store = this.owner.lookup('service:store');

    this.owner.register('service:router', RouterService);

    const service = store.createRecord('service', { description: 'Test' });
    const request = store.createRecord('request');
    const controller = this.owner.lookup('controller:request/service');

    assert.equal(request.location.get('description'), undefined);
    controller.send('selectService', service);
    assert.equal(
      request.service.get('description'),
      service.get('description')
    );
  });
});
