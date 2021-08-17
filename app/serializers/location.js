import ApplicationSerializer from './application';

export default class LocationSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'offices') {
      return 'location';
    }
    return super.modelNameFromPayloadKey(payloadKey);
  }
}
