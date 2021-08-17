import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestServiceRoute extends Route {
  @service store;
  @service configuration;

  model() {
    return this.store.query('service', {
      filter: {
        clinicianId: this.configuration.clinicianId,
      },
    });
  }
}
