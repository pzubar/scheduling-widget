import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
  @attr('string') description;
  @attr duration;
  @attr rate;
}
