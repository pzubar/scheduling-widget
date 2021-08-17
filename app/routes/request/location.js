import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestLocationRoute extends Route {
  @service store;
  @service configuration;
  @service router;

  model() {
    // const { request } = this.modelFor('request');
    // const { service } = request;
    //
    // return this.store.query('location', {
    //   filter: {
    //     clinicianId: this.configuration.clinicianId,
    //     cptCodeId: service.id,
    //   },
    // });
    return [
      {
        city: 'Colorado Springs',
        name: 'Satellite Office',
        state: 'CO',
        street: '10125 Federal Dr #100',
        zip: '80908',
        phone: '(626) 298-1956',
        isVideo: false,
      },
      {
        city: 'Colorado Springs',
        name: 'Satellite Office',
        state: 'CO',
        street: '10125 Federal Dr #100',
        zip: '80908',
        phone: '(626) 298-1956',
        isVideo: false,
      },
      {
        city: 'Colorado Springs',
        name: 'Satellite Office',
        state: 'CO',
        street: '10125 Federal Dr #100',
        zip: '80908',
        phone: '(626) 298-1956',
        isVideo: false,
      },
    ];
  }

  beforeModel(transition) {
    // super.beforeModel(transition);
    // const { request } = this.modelFor('request');
    // const { service } = request;
    //
    // if (!service) {
    //   this.router.transitionTo('request.service');
    // }
  }
}
