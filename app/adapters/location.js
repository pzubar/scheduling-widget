import ApplicationAdapter from './application';

export default class LocationAdapter extends ApplicationAdapter {
  pathForType() {
    return 'offices';
  }
}
