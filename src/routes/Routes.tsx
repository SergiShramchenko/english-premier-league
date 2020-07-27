import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import TablePage from '../pages/table/TablePage';
import ClubsPages from '../pages/clubs/ClubsPage';
import PageNotFound from '../pages/404/PageNotFound';

export default () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/table' component={TablePage} />
    <Route path='/clubs' component={ClubsPages} />
    {/* <Route exact path='*' component={HomePage} /> */}
    <Route path='/404' component={PageNotFound} />
    <Redirect to='/404' />
  </Switch>
);
