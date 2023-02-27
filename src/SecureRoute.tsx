import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet } from 'react-router-dom';

const SecureRoute: React.FC = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (authState?.isAuthenticated) {
      sessionStorage.setItem('OKTA_HASURA_POC_ACCESS_TOKEN', authState.accessToken.accessToken);
    } else {
      const originalUri = toRelativeUrl(window.location.href, window.location.origin);
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return <div>Not a user</div>;
  }

  return <Outlet />;
};

export default SecureRoute;
