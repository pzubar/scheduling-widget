import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestRoute extends Route {
  @service configuration;
  @service store;
  @service router;

  model(params) {
    const { clinicianId, baseUrl } = params;

    if (clinicianId || baseUrl) {
      this.configuration.set({ clinicianId, baseUrl });
    }

    if (this.configuration.clinicianId && this.configuration.baseUrl) {
      const clinician = this.store.findRecord(
        'clinician',
        this.configuration.clinicianId
      );
      const request = this.store.createRecord('request');

      // this.router.transitionTo('request.service');
      return { clinician, request };
    } else {
      this.router.transitionTo('index');
    }
  }
}
