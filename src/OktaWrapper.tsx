import React from 'react';
import { Security } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { useNavigate } from 'react-router-dom';
import { authClient } from '@oktaConfig';
import AppRoutes from './web/routes';
import TokenInfo from './web/components/TokenInfo';

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
    navigate(toRelativeUrl(originalUri, window.location.origin), { replace: true });
  };

  return (
    <Security oktaAuth={authClient} restoreOriginalUri={restoreOriginalUri}>
      <div className="content-wrapper">
        <TokenInfo />
        <AppRoutes />
      </div>
    </Security>
  );
};

export default App;
