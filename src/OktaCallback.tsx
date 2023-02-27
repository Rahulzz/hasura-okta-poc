import { LoginCallback } from '@okta/okta-react';
import OktaError from './OktaError';

const OktaCallback = () => <LoginCallback errorComponent={OktaError} />;

export default OktaCallback;
