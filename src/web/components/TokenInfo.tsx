import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

interface RouteProps {}

const TokenInfo: React.FC<RouteProps> = React.memo((): JSX.Element => {
  const { oktaAuth, authState } = useOktaAuth();
  return (
    <div className="token-box">
      Access Token from Okta
      <div className="token-container">{JSON.stringify(authState?.accessToken)}</div>
    </div>
  );
});

export default TokenInfo;
