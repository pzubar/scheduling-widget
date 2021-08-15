import ApplicationAdapter from './application';

export default class ServiceAdapter extends ApplicationAdapter {
  pathForType(type) {
    return 'cpt-codes';
  }
}
