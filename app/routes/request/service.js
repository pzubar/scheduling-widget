import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'scheduling-widget/config/environment';

export default class RequestServiceRoute extends Route {
  @service store;

  model() {
    console.log("ENV", ENV)
    return this.store.query('service', {
      filter: {
        clinicianId: 2,
      },
    });
  }
}
