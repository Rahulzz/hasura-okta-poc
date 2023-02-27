import { useQuery } from '@apollo/client';
import { SAMPLE_GET } from '@queries';
import React from 'react';

interface RouteProps {}

const Home: React.FC<RouteProps> = React.memo((): JSX.Element => {
  const { data, loading, error } = useQuery(SAMPLE_GET);

  if (loading) {
    return <div>Running Hasura Query</div>;
  }

  if (error) {
    return (
      <div className="data-box">
        Hasura Execution Failed
        <div className="data-container error">{JSON.stringify(error)}</div>
      </div>
    );
  }

  return (
    <div className="data-box">
      Data from Hasura
      <div className="data-container">
        {data?.customer?.map((customer, index) => (
          <p key={index}>{customer.email}</p>
        ))}
      </div>
    </div>
  );
});

export default Home;
