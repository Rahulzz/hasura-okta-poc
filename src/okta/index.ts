import { OktaAuth, OktaAuthOptions } from '@okta/okta-auth-js';

const config: OktaAuthOptions = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URL,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/authorization-code/callback',
  scopes: ['openid', 'profile'],
};

export const authClient = new OktaAuth(config);
