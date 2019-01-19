import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import ForeignCurrency from '../ForeignCurrency';

const AppRoutes = (
  <Switch>
  	<Route exact path="/" component={HomePage} />
    <Route path="/foreign-currency" component={ForeignCurrency} />
  </Switch>
);

export default AppRoutes;
