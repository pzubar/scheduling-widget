import Model, { belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @belongsTo('clinician') clinician;
  @belongsTo('service') service;
  @belongsTo('location') location;
}
