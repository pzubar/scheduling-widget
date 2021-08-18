import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | request', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('request', {});
    assert.ok(model);
  });

  test('should own a clinician', function (assert) {
    const request = this.owner.lookup('service:store').modelFor('request');
    const relationship = request.relationshipsByName.get('clinician');

    assert.equal(
      relationship.key,
      'clinician',
      'has relationship with clinician'
    );
    assert.equal(
      relationship.kind,
      'belongsTo',
      'kind of relationship is belongsTo'
    );
  });

  test('should own a service', function (assert) {
    const request = this.owner.lookup('service:store').modelFor('request');
    const relationship = request.relationshipsByName.get('service');

    assert.equal(relationship.key, 'service', 'has relationship with service');
    assert.equal(
      relationship.kind,
      'belongsTo',
      'kind of relationship is belongsTo'
    );
  });
});
