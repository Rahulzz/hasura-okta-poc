import React from 'react';

interface RouteProps {}

const OktaError: React.FC<RouteProps> = (): JSX.Element => {
  return <div>Not Authorized by OKTA</div>;
};

export default OktaError;
