import ApplicationAdapter from './application';

export default class ServiceAdapter extends ApplicationAdapter {
  pathForType() {
    return 'cpt-codes';
  }
}
