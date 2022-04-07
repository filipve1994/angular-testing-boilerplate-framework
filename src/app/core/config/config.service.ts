import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrlApi = 'http://localhost:8010';
  appRelease = '';
  appVersion = '';
  installationTime = '';
  addMetaAttributes = false;
  environmentLevel = 'LOCAL';
  environmentName = 'u0Local';

  user = '';
  sessionUuid = '';

  constructor() {}
}
