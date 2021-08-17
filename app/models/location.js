import Model, { attr } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') city;
  @attr('string') name;
  @attr('string') state;
  @attr('string') street;
  @attr('string') zip;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('boolean') isPublic;
}
