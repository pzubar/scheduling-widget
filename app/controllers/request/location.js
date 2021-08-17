import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestLocationController extends Controller {
  @service store;
  @service router;

  @action
  selectLocation(location) {
    const requests = this.store.peekAll('request');
    const request = requests.objectAt(0);

    request.location = location;
  }
}
