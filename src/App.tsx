import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import OktaWrapper from './OktaWrapper';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <OktaWrapper />
    </Router>
  );
};

export default App;
