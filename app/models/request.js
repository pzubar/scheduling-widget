import Model, { attr } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr service;
  @attr location;
}
