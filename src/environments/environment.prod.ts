import { business } from './business';
import { config } from './configuration';
import { firebaseConfig } from './firebase';
export const environment = {
  production: true,
  business: business,
  configuration: config,
  firebase: firebaseConfig,
};
