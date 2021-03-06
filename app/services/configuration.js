import Service from '@ember/service';
import ENV from 'scheduling-widget/config/environment';

export default class ConfigurationService extends Service {
  clinicianId = ENV.APP.clinicianID;
  baseUrl = ENV.APP.baseUrl;

  set({ clinicianId = this.clinicianId, baseUrl = this.baseUrl }) {
    this.clinicianId = clinicianId;
    this.baseUrl = baseUrl;
  }
}
