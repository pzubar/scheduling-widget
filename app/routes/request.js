import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class RequestRoute extends Route {
  @service configuration;

  model(params) {
    const { clinicianID, baseUrl } = params;

    if (!this.configuration.clinicianID || !this.configuration.baseUrl) {
      // this.configuration.set({ clinicianID, baseUrl });
    }
    this.transitionTo('request.service');
  }
}
