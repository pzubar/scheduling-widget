import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
  @attr description;
  @attr duration;
  @attr rate;
}
