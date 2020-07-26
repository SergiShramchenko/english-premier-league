import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import TablePage from '../pages/table/TablePage';
import ErrorPage from '../pages/error/ErrorPage';

export default () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/table' component={TablePage} />
    {/* <Route exact path='*' component={HomePage} /> */}
    <Route path='/404' component={ErrorPage} />
    <Redirect to='/404' />
  </Switch>
);
