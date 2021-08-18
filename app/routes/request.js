import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestRoute extends Route {
  @service configuration;
  @service store;
  @service router;

  model(params) {
    const { clinicianId, baseUrl } = params;

    this.configuration.set({ clinicianId, baseUrl });

    if (this.configuration.clinicianId && this.configuration.baseUrl) {
      const request = this.store.createRecord('request', {});

      this.store
        .findRecord('clinician', this.configuration.clinicianId)
        .then((clinicianRecord) => {
          request.clinician = clinicianRecord;

          this.router.transitionTo('request.service');
        })
        .catch(() => this.router.transitionTo('index'));

      return request;
    } else {
      this.router.transitionTo('index');
    }
  }
}
