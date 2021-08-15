import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ServiceSerializer extends JSONAPISerializer {
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'cptCodes') {
      return 'service';
    }
    return super.modelNameFromPayloadKey(payloadKey);
  }
}
