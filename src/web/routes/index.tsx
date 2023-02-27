import { Route, Routes as Switch } from 'react-router-dom';
import Home from '@views/Home';
import SecureRoute from 'src/SecureRoute';
import OktaCallback from 'src/OktaCallback';

const Routes = () => {
  return (
    <Switch>
      <Route path="/authorization-code/callback" element={<OktaCallback />} />
      <Route path="/" element={<SecureRoute />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Switch>
  );
};

export default Routes;
