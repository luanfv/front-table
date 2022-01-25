import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListaEmployees from './pages/ListaEmployees';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListaEmployees} />
    </Switch>
  );
}
