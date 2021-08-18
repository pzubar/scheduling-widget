import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('the required headers are set', function (assert) {
    const baseUrl = 'example.com';
    this.owner.lookup('service:configuration').baseUrl = baseUrl;
    const adapter = this.owner.lookup('adapter:application');
    const headers = {
      Accept: 'application/vnd.api+json',
      'Api-Version': '2020-01-01',
      'Application-Build-Version': '0.0.1',
      'Application-Platform': 'web',
      'Base-URL': baseUrl,
    };

    assert.deepEqual(adapter.headers, headers);
  });
});
