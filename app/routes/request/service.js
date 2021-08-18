import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestServiceRoute extends Route {
  @service store;
  @service configuration;
  @service router;

  model() {
    return this.store.query('service', {
      filter: {
        clinicianId: this.configuration.clinicianId,
      },
    });
  }

  beforeModel(transition) {
    super.beforeModel(transition);
    const request = this.modelFor('request');
    console.log("WTF")
    if (!request.clinician) {
      this.router.transitionTo('request');
    }
  }
}
