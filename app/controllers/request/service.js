import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestServiceController extends Controller {
  @service store;
  @service router;

  @action
  selectService(service) {
    const requests = this.store.peekAll('request');
    const request = requests.objectAt(0);

    request.set('service', service);
    this.router.transitionTo('request.location');
  }
}
