import packageVersion from '../../package.json';

export const environment = {
  version: packageVersion.version,
  production: true,
  showDevFeatures: false,
  saveFileFeatureEnabled: false,
  appName: "angular-testing-boilerplate-framework"
};
