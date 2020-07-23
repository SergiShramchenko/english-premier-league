import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import TablePage from '../pages/table/TablePage';

export default () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/table' component={TablePage} />
    <Route path='*' exact component={HomePage} />
  </Switch>
);
