import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service configuration;
  @service router;

  beforeModel(transition) {
    super.beforeModel(transition);

    this.router.transitionTo('request');
  }
}
